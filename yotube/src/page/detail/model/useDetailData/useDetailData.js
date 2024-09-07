import React from "react";
import getDetailData from "../../api/detailData/detailData.js";

const useGetDetailData = () => {
  const [detailList, setDetailList] = React.useState([]);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const detailData = getDetailData();
        setDetailList(detailData);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);
  return [detailList, loading, error];
};

export default useGetDetailData;
