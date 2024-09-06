const AsideIcon = (props) => {
  const { content, resource, onClick } = props;
  return (
    <button className="aside_icon" onClick={onClick}>
      <div
        className="svg"
        style={{ backgroundImage: `url(${resource})` }}></div>
      {content && <p className="icon_text">{content}</p>}
    </button>
  );
};
