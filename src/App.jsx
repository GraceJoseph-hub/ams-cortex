import "./App.css";
import { useState } from "react";
import Admindashboard from "./components/admin/Admindashboard";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import treadmillImg from './assets/img/treadmill.jpg'
import randomImg from './assets/img/test.png'
import randomImge from './assets/img/treadmill-2.png'


function App() {
  const [screenState, setScreenState] = useState(0)

  const signInHandler = () => {
    setScreenState((prev) => prev + 1)
  }
  // To do
  // The login page will be the landing page.
  // I'll create states to hold the screens and render the screens conditionally.
  // Once a user successfully logs in, then the page they should see is the admindashboard.
  // If a user doeasn't have an account, they can click on the register button to lead them to the registration form.
  return (
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
        <p className="absolute top-2 left-10">Back</p>
        {screenState === 0 && <Login onSuccessfulLogin={signInHandler} />}
        {screenState === 1 && <Admindashboard />}
        {/* <Register /> */}
      </div>
    </div>
    //
  );
}

export default App;
