const HoverIcon = ({ resource }) => {
  return (
    <div className="hover_Icon_container">
      <div className="hover_Icon_box">
        <div
          className="hover_Icon svg"
          style={{ backgroundImage: `url(${resource})` }}
        />
      </div>
    </div>
  );
};
