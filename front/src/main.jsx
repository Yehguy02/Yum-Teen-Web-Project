import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from '../src/pages/Login.jsx'

import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login/>}/>
    </Routes>
  </BrowserRouter>,
)
