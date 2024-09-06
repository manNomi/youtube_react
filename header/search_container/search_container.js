const SearchContainer = ({ iconObj }) => {
  const { mic, search } = iconObj;
  return (
    <div className="search_container">
      {/* 검색 박스 */}
      <div className="search_outline">
        <div className="search_box">
          <input className="search_input" placeholder="검색" />
        </div>
        <div
          className="search_hidden svg"
          style={{ backgroundImage: `url(${search.resource})` }}
        />
      </div>

      {/* 검색 버튼 */}
      <button className="search_btn">
        <div
          className="search_btn_img svg"
          style={{ backgroundImage: `url(${search.resource})` }}
        />
      </button>

      {/* 마이크 아이콘 */}
      <HoverIcon resource={mic.resource} />
    </div>
  );
};
