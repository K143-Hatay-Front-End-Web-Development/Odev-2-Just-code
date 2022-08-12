import "./Square.css";

function Square({ value, onClick, index }) {
  return (
    <div className={`grid-item item winner-${index}`} onClick={onClick}>
      {value}
    </div>
  );
}

export default Square;
