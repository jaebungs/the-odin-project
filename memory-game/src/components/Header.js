import React from 'react';

const Header = (props) => {
    return (
        <header>
            <h1 className="title">Memory Game</h1>
            <p className="score">Score: {props.score}</p>
            <p className="score">Highest Score: {props.highestScore}</p>
        </header>
    )
}

export default Header