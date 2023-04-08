import React from 'react';
import './scss/App.scss';
import { Home } from './page/Home';
import { Routes, Route, Link } from 'react-router-dom';
import { DateDocument } from './page/DateDocument';
import { ContractOpt } from './page/ContractOpt';
import { CreateDocument } from './page/CreateDocument';
function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Date" element={<DateDocument />} />
        <Route path="/ContractOpt" element={<ContractOpt />} />
        <Route path="/CreateDoc" element={<CreateDocument />} />
      </Routes>
    </div>
  );
}

export default App;
