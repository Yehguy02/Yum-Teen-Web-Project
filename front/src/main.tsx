import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import './index.css'
import Login from './pages/authorization/Login.tsx'
import Signup from './pages/authorization/Signup.tsx'
import Home from './pages/main/Home.tsx'
import Forgot from './pages/authorization/ForgotPass.tsx'

import Account from './pages/Account.tsx'

import Store from './pages/main/Store.tsx'
import SearchNamePage from './pages/main/SearchName.tsx'
import SearchCategoryPage from './pages/main/SearchCategory.tsx'

import ComfirmOrder from './pages/transaction/Confirm_Order.tsx'
import FinishOrder from './pages/transaction/Finish_Order.tsx'

import UserHistory from './pages/main/UserHistory.tsx'
import Favourite from './pages/main/Favourite.tsx'
import UserSetting from './pages/main/UserSetting.tsx'
import UserCurrent from './pages/main/UserCurrent.tsx'
import UserLogout from './pages/main/UserLogout.tsx'

import StoreAccount from './pages/store/StoreSetting.tsx'
import StoreQueue from './pages/store/StoreQueue.tsx'
import StoreLogout from './pages/store/StoreLogout.tsx'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      {/* public */}
      <Route path="/forget" element={<Forgot />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/account" element={<Account />}/>
      <Route path="/user/signup" element={<Signup />}/>

      {/* need user token */}
      <Route path="/" element={<Home />} />
      <Route path="/user/store/:id" element={<Store />} />
      <Route path="/user/search/category/:keyword" element={<SearchCategoryPage />} />
      <Route path="/user/search/name/:keyword" element={<SearchNamePage />} />

      <Route path="/user/confirm" element={<ComfirmOrder />} />
      <Route path="/user/finish" element={<FinishOrder />} />

      <Route path="/user/current" element={<UserCurrent />} />
      <Route path="/user/history" element={<UserHistory />} />
      <Route path="/user/favourite" element={<Favourite />} />
      <Route path="/user/setting" element={<UserSetting />} />
      <Route path="/user/logout" element={<UserLogout />} />

      <Route path="/store/setting" element={<StoreAccount/>}/>
      <Route path="/store/queue" element={<StoreQueue/>}/>
      <Route path="/store/logout" element={<StoreLogout/>}/>
      {/* need admin token */}
    </Routes>
  </BrowserRouter>,
)