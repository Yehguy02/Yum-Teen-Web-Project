import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import './index.css'
import App from './App.tsx'
<<<<<<< HEAD
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="about" element={<App />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
=======
import Home from './pages/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
>>>>>>> a68c0ea813a2f4734cb0c0c2aa94821e16125af2
    </Routes>
  </BrowserRouter>,
)