import "./App.css";
import Nav from "./components/Navbar/Nav";
import Sidebar from "./components/sidebar/Sidebar"
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className=" py-12 px-14 bg-grey">
      <Nav />
      <div className="flex gap-10 mt-16">
        <div className="w-[5%]">
          <Sidebar />
        </div>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
