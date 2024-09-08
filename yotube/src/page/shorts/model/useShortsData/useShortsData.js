import React from "react";
import getShortsData from "../../api/shortsData/shortsData";

const useShortsData = () => {
  const [shortsList, setShortsList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const shortData = getShortsData();
        setShortsList(shortData);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, []);
  return [shortsList, loading, error];
};

export default useShortsData;
