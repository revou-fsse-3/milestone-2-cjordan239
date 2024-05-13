import React from 'react';
import PublicLayout from './Layout/PublicLayout';
import NewsList from './Component/NewsList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './Page/RegisterPage';
import LoginPage from './Page/LoginPage';
import HomePage from './Page/HomePage';

function App() {
  return (
    <>
    <BrowserRouter>
    <PublicLayout />
      <Routes>

        <Route path='/home' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/gadget' element={<NewsList topic={'gadget'} />} />
        <Route path='/game' element={<NewsList topic={'game'} />} />
        <Route path='/football' element={<NewsList topic={'football'} />} />
        <Route path='/food' element={<NewsList topic={'food'} />} />
        <Route path='/photography' element={<NewsList topic={'photography'} />} />
        
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
