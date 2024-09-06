const Header = () => {
  return (
    <header className="header white">
      <div className="header_logo_box">
        <HoverIcon resource={IconData.settingSrc} />
        <div
          className="header_logo_img"
          style={{ backgroundImage: `url(${IconData.logoSrc})` }}
          onClick={() => {
            location.reload();
          }}
        />
      </div>
      <SearchContainer />
      <HeaderIconList />
    </header>
  );
};
