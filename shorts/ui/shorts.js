const Shorts = () => {
  const {
    shortsList,
    loading: shortsLoading,
    error: shortsError,
  } = useGetShortsData();
  const {
    commentDataList,
    loading: commentsLoading,
    error: commentsError,
  } = useGetShortsCommentData();

  return shortsLoading || commentsLoading ? (
    <div>로딩중</div>
  ) : shortsError || commentsError ? (
    <div>에러</div>
  ) : (
    <main className="shorts_frame">
      {shortsList.length > 0 ? (
        shortsList.map((shortsData) => (
          <ShortsVideo
            key={shortsData.shorts_index} // 각 항목에 고유 키 추가
            shortsData={shortsData}
            iconData={IconData}
            commentData={commentDataList}
          />
        ))
      ) : (
        <div>데이터가 없습니다</div> // 빈 리스트 처리
      )}
    </main>
  );
};
