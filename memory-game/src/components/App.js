import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';

const App = () => {

  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  }

  const resetScore = () => {
    setScore(0)
  };

  useEffect(() => {
    if (score > highestScore) {
      setHighestScore(score)
    }
  }, [score]);

  return (
    <div>
      <Header 
        score={score}
        highestScore={highestScore}
      />
      <Main 
        incrementScore={incrementScore}
        resetScore={resetScore}
      />
    </div>
  )
}

export default App;
