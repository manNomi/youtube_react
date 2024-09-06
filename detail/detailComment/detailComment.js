const DetailComment = () => {
  const { commentList, loading, error } = useGetDetailData();

  return (
    <>
      {loading ? (
        <div>로딩중</div>
      ) : error ? (
        <div>에러</div>
      ) : (
        <>
          <CommentInput userImg={userImg} colorDark={false} />
          {commentList.map((commentData) => (
            <Comment key={commentData.id} {...commentData} />
          ))}
        </>
      )}
    </>
  );
};
