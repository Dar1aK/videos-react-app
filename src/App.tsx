import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Main from './pages/main/main';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;