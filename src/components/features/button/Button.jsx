import "./button.css";

const Button = ({
  type,
  text,
  onClickHandler,
  onChangeHandler,
  onSubmitHandler,
}) => {
  return (
    <button
      className="button-style"
      onClick={onClickHandler}
      onChange={onChangeHandler}
      onSubmit={onSubmitHandler}
      type={type}
    >
      {text}
    </button>
  );
};
export default Button;
