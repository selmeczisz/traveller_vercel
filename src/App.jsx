import './App.css'
import { Outlet} from "react-router-dom";
import {Background} from "./components/Background.jsx";
import {Navbar} from "./components/Navbar.jsx";


function App() {

    return (
        
            <div className='content'>
                <div>
                   <Background/>
                <Navbar/> 
                </div>

                <Outlet />
                
            </div>
           
 
    )
}

export default App