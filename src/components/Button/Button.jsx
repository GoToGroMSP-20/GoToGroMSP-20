function Button({ buttonName, onClickFunction }) {
  function handleClick() {
    onClickFunction();
  }
  return (
    <div className="App">
      <button onClick={handleClick}>{buttonName}</button>
    </div>
  );
}

export default Button;
