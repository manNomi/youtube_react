import React from "react";
import getShortsCommentData from "../../api/commentData/commentData";

const useShortsCommentData = () => {
  const [commentDataList, setCommentDataList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const commentData = getShortsCommentData();
        setCommentDataList(commentData);

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, []);
  return { commentDataList, loading, error };
};
export default useShortsCommentData;
