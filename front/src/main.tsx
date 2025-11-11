import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import './index.css'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
import Home from './pages/Home.tsx'
import Forgot from './pages/ForgotPass.tsx'

import Store from './pages/Store.tsx'
import SearchPage from './pages/Search.tsx'

import ComfirmOrder from './pages/Confirm_Order.tsx'
import FinishOrder from './pages/Finish_Order.tsx'
import Queue from './pages/Queue.tsx'

import UserHistorty from './pages/UserHistory.tsx'
import Favourite from './pages/Favourite.tsx'
import UserSetting from './pages/UserSetting.tsx'
import UserCurrent from './pages/UserCurrent.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      {/* public */}
      <Route path="/forget" element={<Forgot />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/user/signup" element={<Signup />}/>

      {/* need user token */}
      <Route path="/" element={<Home />} />
      <Route path="/user/store" element={<Store />} />
      <Route path="/user/search/:keyword" element={<SearchPage />} />

      <Route path="/user/confirm" element={<ComfirmOrder />} />
      <Route path="/user/finish" element={<FinishOrder />} />
      <Route path="/user/queue" element={<Queue />} />

      <Route path="/user/current" element={<UserCurrent />} />
      <Route path="/user/history" element={<UserHistorty />} />
      <Route path="/user/favourite" element={<Favourite />} />
      <Route path="/user/setting" element={<UserSetting />} />


      {/* need admin token */}
    </Routes>
  </BrowserRouter>,
)