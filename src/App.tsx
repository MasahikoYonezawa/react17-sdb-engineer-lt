import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AutoBatchEventHandler} from "./components/AutoBatchEventHandler";

function App() {
  console.log("Appがレンダリング！")
  return (
    <div className="App">
      <AutoBatchEventHandler />
    </div>
  );
}

export default App;
