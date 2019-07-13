import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Search from '../../components/Search/Search';
import CardHolder from '../CardHolder/CardHolder';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Search/>
      <CardHolder/>
    </div>
  );
}

export default App;
