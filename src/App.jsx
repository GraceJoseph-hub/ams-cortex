import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admindashboard from "./components/admin/Admindashboard";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import randomImge from "./assets/img/treadmill-2.png";

function App() {
  const [screenState, setScreenState] = useState("login");
  
  const showRegisterScreen = () => {
    setScreenState("register");
  };

  const showLoginScreen = () => {
    setScreenState("login");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex h-screen w-full max-[800px]:flex-col max-[800px]:items-center max-[800px]:w-full max-[800px]:overflow-hidden max-[800px]:gap-10 ">
              <div className="bg-blue-500 w-1/2 flex justify-center items-center relative max-[800px]:w-full">
                <h1 className="absolute top-2 left-10 text-white">Logo</h1>
                <img
                  src={randomImge}
                  alt="A woman running on a treadmill."
                  className="max-[800px]:w-[400px]"
                />
              </div>

              <div className="bg-white w-1/2 flex justify-around items-center relative max-[800px]:w-auto">
                {screenState === "login" && (
                  <Login
                    onRegister={showRegisterScreen}
                    // className="max-[400px]:px-[20px]"
                  />
                )}
                {screenState === "register" && (
                  <Register onBack={showLoginScreen} />
                )}
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

