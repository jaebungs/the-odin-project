import React from 'react';

const Main = (props) => {

    return (
        <div>
            <button onClick={props.incrementScore}>+</button>
            <button onClick={props.resetScore}>reset</button>
        </div>
    )
}

export default Main;
