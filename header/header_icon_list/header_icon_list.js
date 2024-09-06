const HeaderIconList = ({ iconObj }) => {
  const { camera, alert } = iconObj;
  return (
    <nav className="header_icon_list">
      <HoverIcon resource={camera.resource} />
      <HoverIcon resource={alert.resource} />
      <Slider />
    </nav>
  );
};
