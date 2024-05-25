import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}></Route>
        <Route path="/dashboard" element={
        <PrivateRoute isLoggedIn={isLoggedIn} > 
          <Dashboard></Dashboard>
        </PrivateRoute>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
