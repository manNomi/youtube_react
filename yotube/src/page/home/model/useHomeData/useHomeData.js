import React from "react";
import getHomeData from "../../api/homeData/homeData";
const useHomeData = () => {
  const [videoList, setVideoList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = getHomeData();
        setVideoList(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);
  return [loading, error, videoList];
};

export default useHomeData;
