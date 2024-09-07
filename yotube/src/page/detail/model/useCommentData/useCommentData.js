import React from "react";
import getCommentData from "../../api/commentData/commentData.js";
const useDetailCommentData = () => {
  const [commentDataList, setCommentDataList] = React.useState([]);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const commentData = getCommentData();
        setCommentDataList(commentData);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);
  return [commentDataList, loading, error];
};

export default useDetailCommentData;
