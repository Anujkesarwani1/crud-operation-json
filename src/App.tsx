import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/add' element={<AddUser />}/>
        <Route path='/all' element={<AllUsers />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
