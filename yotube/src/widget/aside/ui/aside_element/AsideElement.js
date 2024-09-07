import css from "./AsideElement.module.css";
const AsideIcon = (props) => {
  return (
    <button className={css.icon} onClick={props.onClick}>
      <div
        className="svg"
        style={{ backgroundImage: `url(${props.resource})` }}></div>
      {props.content && <p className={css.icon_text}>{props.content}</p>}
    </button>
  );
};
export default AsideIcon;
