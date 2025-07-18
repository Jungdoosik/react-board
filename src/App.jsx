import { useState } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* 다른 페이지도 여기 추가 가능 */}
      </Routes>
    </Router>
    </>
  )
}

export default App
