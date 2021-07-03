import {useState} from "react"
import {Home,Products} from "./pages";
import Navbar from "./components/layout/Navbar"
import "./styles/main.css";

function App() {
  const [currentPage,setCurrentPage]=useState("Home");
  const changePage=(page)=>{
    setCurrentPage(page);
  }
  return (
    <div className="App">
      <Navbar changePage={changePage} />
      {
        currentPage==="Home"?<Home/>:<Products/>
      }
    </div>
  );
}

export default App;
