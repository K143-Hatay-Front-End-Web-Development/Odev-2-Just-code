import './Square.css'

function Square({value,onClick}){
  return (
    <div className="item" onClick={onClick} >
    {value}
    </div>
  )
}

export default Square;