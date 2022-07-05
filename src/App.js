
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbars from "./components/Navbars";
import Home from './pages/Home';
import Logout from './pages/Logout';
import Screen2 from './pages/Screen2';


function App() {
  return (
    <>
   <Navbars />
   <Routes >
    <Route exact path="/" element={<Home />} />
    <Route  path="/logout" element={<Logout />} />
    <Route  path='/Screen2' element={< Screen2/>} />
    
   </Routes>
  
    </>
  );
}

export default App;
 