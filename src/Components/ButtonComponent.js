import "../Styles/Button.css";
function ButtonComponent({ reset, stop, status, start, stopVal, disabled, setDisabled }) {
  return (
    <div className="buttons">
      <button className="btn-reset" onClick={reset}>
        Reset
      </button>
      <button className="btn-stop" onClick={stop}>
        {stopVal === "STOP" ? "STOP" : "RESUME"}
      </button>
      <button className="btn-start" disabled={status!==0}  onClick={start}>
        Start Timer
      </button>
    </div>
  );
}

export default ButtonComponent;
