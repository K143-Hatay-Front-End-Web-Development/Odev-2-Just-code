import Square from "../Square/Square";
import React, { useState,useEffect} from "react";

import "./Game.css";

function Game() {
  const [value, setValue] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState('') //Win Check

  
  const handleClick = (num) => {
  
    let squares = [...value];
    if (value[num] === '') {
      squares[num] = 'X';
    } else if (value[num] === 'X') {
      squares[num] = 'O';
    } else {
      squares[num] = '';
    }

    checkWinner(squares);
    setValue(squares);
    if(winner === 'X' || winner === 'O'){
      setWinner(null);
      setValue(Array(9).fill(''));
    }else{
    } 
  };
  
  const checkWinner = (squares) => {
    let menus = {
      row: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      column: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let menu in menus) {
      menus[menu].forEach((item) => {
         if (
          squares[item[0]] === '' ||
          squares[item[1]] === '' ||
          squares[item[2]] === ''
        ) {
        } else if (
          squares[item[0]] === squares[item[1]] &&
          squares[item[1]] === squares[item[2]]
        ) {
          setWinner(squares[item[0]]);
        }
      });
    }
  };

  /*
  useEffect(()=>{
    if(winner[]==="X"){
      console.log("O winner");
    }else if(winner==="O"){
      console.log("O winner");
    }

  },[winner])

  */
  
  
  return (
    <div className="container">
      <div className="title">GAME START</div>
      <div className="row">
        <Square onClick={() =>handleClick(0)} value={value[0]} winner={winner} />
        <Square onClick={() =>handleClick(1)} value={value[1]} winner={winner}/>
        <Square onClick={() =>handleClick(2)} value={value[2]} winner={winner}/>
      </div>
      <div className="row">
        <Square onClick={() =>handleClick(3)} value={value[3]} winner={winner}/>
        <Square onClick={() =>handleClick(4)} value={value[4]} winner={winner}/>
        <Square onClick={() =>handleClick(5)} value={value[5]} winner={winner}/>
      </div>
      <div className="row">
        <Square onClick={() =>handleClick(6)} value={value[6]} winner={winner}/>
        <Square onClick={() =>handleClick(7)} value={value[7]}  winner={winner}/>
        <Square onClick={() =>handleClick(8)} value={value[8]} winner={winner}/>
      </div>
    </div>
  );
}

export default Game;
