import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header'
import Main from './pages/main/main';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
