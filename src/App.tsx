import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AirportDetailPage from './pages/AirportDetailPage';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/auth' element={<AuthPage />}></Route>
        <Route path='/airport/:id' element={<AirportDetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
