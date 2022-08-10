import Square from "../Square/Square";
import React, { useState} from "react";

import "./Game.css";

function Game() {
  const [value,setValue] = useState(Array(9).fill(null)) 
  //console.log(value);
  const[turn,setTurn] = useState(true);
  //const[winner,setWinner] = useState("");



  const handleClick = (i) => {

    //console.log("Click",i);
    const values = [...value];
    values[i] = turn ? "X" : "O"; 
    setValue(values);
    setTurn(!turn);// false çevir
  }

  return (
    <div className="container">
      <div className="row">
        <Square onClick={() =>handleClick(0)} value={value[0]} />
        <Square onClick={() =>handleClick(1)} value={value[1]} />
        <Square onClick={() =>handleClick(2)} value={value[2]} />
      </div>
      <div className="row">
        <Square onClick={() =>handleClick(3)} value={value[3]} />
        <Square onClick={() =>handleClick(4)} value={value[4]} />
        <Square onClick={() =>handleClick(5)} value={value[5]} />
      </div>
      <div className="row">
        <Square onClick={() =>handleClick(6)} value={value[6]}/>
        <Square onClick={() =>handleClick(7)} value={value[7]}/>
        <Square onClick={() =>handleClick(8)} value={value[8]}/>
      </div>
    </div>
  );
}

export default Game;
