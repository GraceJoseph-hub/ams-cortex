import "./App.css";
import Admindashboard from "./components/admin/Admindashboard";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import treadmillImg from './assets/img/treadmill.jpg'
import randomImg from './assets/img/test.png'
import randomImge from './assets/img/treadmill-2.png'


function App() {
  // To do
  // The login page will be the landing page.
  // I'll create states to hold the screens and render the screens conditionally.
  // Once a user successfully logs in, then the page they should see is the admindashboard.
  // If a user doeasn't have an account, they can click on the register button to lead them to the registration form.
  return (
    <div className="flex items-center h-full">
      <div className="bg-blue-500 w-1/2">
        {/* <img src={treadmillImg} alt="A woman running on a treadmill." height={200} width={200} className=""/> */}
        <img src={randomImge} alt="A woman running on a treadmill." className=""/>
      </div>
      <div className="bg-white w-1/2">
        <Login />
        {/* <Register /> */}
      </div>
      {/* <Admindashboard /> */}
    </div>
  );
}

export default App;
