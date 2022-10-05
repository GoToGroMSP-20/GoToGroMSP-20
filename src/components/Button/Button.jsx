import "./Button.css";

export const Button = ({buttonType, isDisabled=false, onClickFunction, children}) => {
  const handleClick = () => {
    onClickFunction && onClickFunction();
  };

  return (
    <button className="button" buttonType={buttonType} disabled={isDisabled} onClick={handleClick}>{children}</button>
  );
}
