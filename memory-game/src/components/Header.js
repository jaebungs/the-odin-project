import React from 'react';

const Header = (props) => {
    return (
        <header>
            <h1>Memory Game</h1>
            <p>Score: {props.score}</p>
            <p>Highest Score: {props.highestScore}</p>
        </header>
    )
}

export default Header