import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Admindashboard from "./components/admin/Admindashboard";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import randomImge from "./assets/img/treadmill-2.png";

function App() {
  const [screenState, setScreenState] = useState("login");
  

  const showRegisterScreen = () => {
    setScreenState("register"); // Change to Register screen
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex h-screen">
              <div className="bg-blue-500 w-1/2 flex justify-center items-center relative">
                <h1 className="absolute top-2 left-10 text-white">Logo</h1>
                <img
                  src={randomImge}
                  alt="A woman running on a treadmill."
                  className=""
                />
              </div>

              <div className="bg-white w-1/2 flex justify-center items-center relative">
                {screenState === "login" && (
                  <Login
                    onRegister={showRegisterScreen}
                  />
                )}
                {screenState === "register" && <Register />}
              </div>
            </div>
          }
        />
        <Route path="/dashboard" element={<Admindashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

