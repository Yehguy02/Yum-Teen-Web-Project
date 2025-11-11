import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import './index.css'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
import Home from './pages/Home.tsx'
import Forgot from './pages/ForgotPass.tsx'

import Store from './pages/Store.tsx'
import ComfirmOrder from './pages/Confirm_Order.tsx'
import FinishOrder from './pages/Finish_Order.tsx'
import Queue from './pages/Queue.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      {/* public */}
      <Route path="/forget" element={<Forgot />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      {/* need user token */}
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/confirm" element={<ComfirmOrder />} />
      <Route path="/finish" element={<FinishOrder />} />
      <Route path="/queue" element={<Queue />} />
      {/* need admin token */}
    </Routes>
  </BrowserRouter>,
)