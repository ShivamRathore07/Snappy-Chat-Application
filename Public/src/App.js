import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Chat } from "./Pages/Chat";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { SetAvatar } from "./Pages/SetAvatar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/setavatar" element={<SetAvatar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

