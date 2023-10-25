import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/add" element={<AddUser />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
