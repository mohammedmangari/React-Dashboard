import './App.css'
import  Navbar  from "./components/TopBar/Navbar/Navbar";
import  DashboardHeader  from "./components/Dashboard/Header/DashboardHeader";
import DashboardContent from "./components/Dashboard/DashboardContent/DashboardContent";
import "./App.css";

function App() {
  const NavProperties ={
    className:"top-nav-instance",
    title:"Dashboard"
  }
  return (
    <>
       <div className="main-container">
             <div className="div-3">
               <Navbar
                    className={NavProperties.className}
                    title={NavProperties.title}
                />
                <div className="container">      
                    <DashboardHeader/>
                    <DashboardContent/>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
