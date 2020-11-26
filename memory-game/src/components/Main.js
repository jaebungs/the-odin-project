import React from 'react';
import Brands from './Brands';

const Main = (props) => {

    return (
        <div>
            <button onClick={props.incrementScore}>+</button>
            <button onClick={props.resetScore}>reset</button>

            <div className="Brand-component-container">
                <Brands />
            </div>
            
        </div>
    )
}

export default Main;
