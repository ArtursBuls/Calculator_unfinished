import React from 'react';
import { Calculator } from './components/calculator';
import './App.css';

function App() {
  return (
    <div className="container-main">
      <div className="row center-xs">
        <div className="col-xs-12 wrapper-main">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
