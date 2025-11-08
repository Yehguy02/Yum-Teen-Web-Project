import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
import ForgetPass from './pages/ForgetPass.tsx'
import Account from './pages/Account.tsx'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/forget" element={<ForgetPass/>}/>
      <Route path="/account" element={<Account/>}/>
    </Routes>
  </BrowserRouter>,
)
