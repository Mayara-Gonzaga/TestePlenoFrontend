import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {}
        <Route path="/" element={<Login />} />
        {}
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
