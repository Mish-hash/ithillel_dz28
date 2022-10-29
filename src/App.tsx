import React from 'react';
import './App.css';
import Card from './components/CardsList/Card';

function App() {
  return (
    <div className="App">
      <h3>ДЗ 28. React Type Script</h3>
      <Card text='Some text in props' number={4}/>
    </div>
  );
}

export default App;
