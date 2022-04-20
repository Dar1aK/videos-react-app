import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Detail from './pages/detail';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
