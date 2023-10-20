import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import SignOut from './pages/SignOut';
import SignIn from "./pages/SignUp";


export default function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path ='/'element={<Home />} />
      <Route path ='/SignUp' element={<SignUp />} />
      <Route path ='/SignOut' element={<SignOut />} />
      <Route path ='/Profile' element={<Profile />} />
    </Routes>

    </BrowserRouter>
  )
}
