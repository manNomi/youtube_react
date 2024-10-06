import { useSearchParams } from "react-router-dom";
import { useScrollDetection } from "./useScroll.js";
import { useEffect, useState } from "react";

export const useScrollEvent = (shorts) => {
  console.log("숏츠:", shorts.shorts_index);
  const [searchParams, setSearchParams] = useSearchParams();
  const [shortsData, setShortsData] = useState([]);

  useScrollDetection(() => {
    const currentId = parseInt(searchParams.get("id")) || 0;
    setSearchParams({ id: currentId + 1 });

    setShortsData((prevShortsData) => {
      let updatedData = [...prevShortsData];

      if (prevShortsData.length === 2) {
        if (updatedData[1] === shorts) return updatedData;
        updatedData = [prevShortsData[1], shorts];
      } else if (prevShortsData.length === 1) {
        if (updatedData[1] === shorts) return updatedData;
        updatedData = [...prevShortsData, shorts];
      } else {
        updatedData = [shorts];
      }
      console.log("와이:", updatedData);
      return updatedData;
    });
  });

  useEffect(() => {
    console.log("업데이트된 shortsData:", shortsData);
  }, [shortsData]);
};
