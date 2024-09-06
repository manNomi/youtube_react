const iconData = [
  {
    content: "홈",
    type: "Home",
    resource: `./image/aside/home.svg`,
  },
  {
    content: "숏츠",
    type: "Shorts",

    resource: "./image/aside/shorts.svg",
  },
  {
    content: "구독",
    type: "Subscribe",

    resource: "./image/aside/subscribe.svg",
  },
  {
    content: "유튜브 뮤직",
    type: "YoutubeMusic",

    resource: "./image/aside/youtube_music.svg",
  },
  {
    content: "나",
    type: "MyVideo",
    resource: "./image/aside/user.svg",
  },
  {
    content: "오프라인 저장",
    type: "Offline",
    resource: "./image/aside/download.svg",
  },
];

const Aside = (props) => {
  return (
    <aside className="aside">
      {iconData.map((icon) => (
        <AsideIcon
          content={icon.content}
          resource={icon.resource}
          onClick={() => {
            props.onPageClick(icon.type);
          }}
        />
      ))}
    </aside>
  );
};
