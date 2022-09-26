import "./Button.css";

export const Button = ({buttonType, isDisabled, onClickFunction, children}) => {
  const handleClick = () => {
    onClickFunction();
  };

  return (
    <button className="button" buttonType={buttonType} disabled={isDisabled} onClick={handleClick}>{children}</button>
  );
}
