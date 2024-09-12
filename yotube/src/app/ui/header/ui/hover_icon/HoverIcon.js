import css from "./HoverIcon.module.css";
const HoverIcon = ({ resource }) => {
  return (
    <div className={css.container}>
      <div className={css.box}>
        <div
          className={`${css.icon} svg`}
          style={{ backgroundImage: `url(${resource})` }}
        />
      </div>
    </div>
  );
};
export default HoverIcon;
