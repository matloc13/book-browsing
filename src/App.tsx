import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <SearchBar />
      <SearchList />
      <InterestList />
      <ReadList />
    </div>
  );
}

export default App;
