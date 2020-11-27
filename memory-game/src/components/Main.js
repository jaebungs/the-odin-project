import React, { useState, useEffect } from 'react';
import Brands from './Brands';

const Main = (props) => {

  const [tracking, setTracking] = useState([]);
  
  const handleTracking = (id) => {
    setTracking([...tracking, id]);
    checkIfClicked(id)
  };

  const checkIfClicked = (id) => {
    if (tracking.includes(id)){
      console.log('It is clicked')
      setTracking([])
      props.resetScore()
    } else {
        console.log(tracking)
        props.incrementScore()
    }
  }


    return (
        <div>
            <Brands handleTracking={handleTracking}/>
        </div>
    )
}

export default Main;
