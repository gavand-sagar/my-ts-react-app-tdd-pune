import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { getFacts } from './apis';
import { Messagecontext } from './data/context';
import { ApplicationMessages } from './models/language';

function App() {
  const messages = useContext<ApplicationMessages>(Messagecontext)
  const [fact, setFact] = useState('');
  useEffect(() => {
    getFacts()
      .then(x => {
        setFact(x.data.fact)
      })
  }, [])
  return (
    <div className="App">
      <h1>{messages.heading}</h1>
      <header data-testid='header' className="App-header">
        {fact}
      </header>
    </div>
  );
}

export default App;
