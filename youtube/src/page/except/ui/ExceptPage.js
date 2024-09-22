import { NotWork } from "./style.js";
const ExceptPage = (props) => {
  return (
    <NotWork $dark={props.dark}>
      <h1>준비중입니다</h1>
    </NotWork>
  );
};

export default ExceptPage;
