import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/Header'
import Add from './pages/add';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
