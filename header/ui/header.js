const headerIconData = {
  setting: {
    resource: "./image/header/setting.svg",
  },
  alert: {
    resource: "./image/header/alert.svg",
  },
  camera: {
    resource: "./image/header/camera.svg",
  },
  mic: {
    resource: "./image/header/mic.svg",
  },
  search: { resource: "./image/header/search.svg" },
  logo: { resource: "./image/header/logo.svg" },
};

const Header = () => {
  return (
    <header className="header white">
      <div className="header_logo_box">
        <HoverIcon resource={headerIconData.setting.resource} />
        <div
          className="header_logo_img"
          style={{ backgroundImage: `url(${headerIconData.logo.resource})` }}
          onClick={() => {
            location.reload();
          }}
        />
      </div>
      <SearchContainer iconObj={headerIconData} />
      <HeaderIconList iconObj={headerIconData} />
    </header>
  );
};
