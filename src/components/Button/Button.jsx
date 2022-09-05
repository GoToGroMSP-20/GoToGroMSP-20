import "./Button.css";

function Button ({buttonName, onClickFunction}) {
  function handleClick() {
    onClickFunction();
  };

  return (
    <button className="button" onClick={handleClick}>{buttonName}</button>
  );
}

export default Button;
