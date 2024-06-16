import css from "./Button.module.css";
import { MdOutlinePersonAdd } from "react-icons/md";
const Button = ({ txt, type = "submit" }) => {
  return (
    <>
      <button type={type} className={css.button}>
        <MdOutlinePersonAdd />
        {txt}
      </button>
    </>
  );
};

export default Button;
