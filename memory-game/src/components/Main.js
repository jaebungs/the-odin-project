import React, { useState } from 'react';
import Brands from './Brands';

const Main = (props) => {

  const [tracking, setTracking] = useState([]);
  
  const handleTracking = (id) => {
    setTracking([...tracking, id]);
    checkIfClicked(id)
  };

  const checkIfClicked = (id) => {
    if (tracking.includes(id)){
      setTracking([])
      props.resetScore()
    } else {
        props.incrementScore()
    }
  }

    return (
        <div>
            <Brands handleTracking={handleTracking} tracking={tracking}/>
        </div>
    )
}

export default Main;
