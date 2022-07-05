import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {AiTwotoneSetting } from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import { Link } from 'react-router-dom';
import { SidebarData } from '../components/sidebarData';
//  import '../components/navbar.css';


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [sidebar2, setSidebar2] = useState(false);

  const showSidebar2 = () => setSidebar2(!sidebar2)

  return (
    <>
     <div className='navbar bg-blue-900 h-[10vh] flex justify-between items-center'>
          <Link to='#' className='menu-bars text-white ml-4 text-[2rem] bg-none'>
            <FaIcons.FaBars onClick={showSidebar} ></FaIcons.FaBars>
            </Link>

          <Link to='#' className='menu-bars text-white  text-[2rem] bg-none mr-4'>
            <AiTwotoneSetting onClick={showSidebar2} ></AiTwotoneSetting>
            </Link>  
        </div>
        <nav className={sidebar ? 'nav-menu actives left-0 bg-blue-900 w-[120px] h-[100vh] flex justify-start  fixed top-0   duration-[850ms]' : 'nav-menu bg-blue-900 w-[250px] h-[80vh] flex justify-center fixed top-0 left-[-100%]  duration-[750ms] '}>
          <ul className='nav-menu-items w-28' onClick={showSidebar}>
            <li className='navbar-toggle bg-blue-900 w-28 h-[80px] flex justify-start  items-center'>
              <Link to='#' className='menu-bars text-white ml-5  text-[2rem] bg-none'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} >
                  <Link to={item.path} className="nav-text text-white text-left flex justify-start items-center ml-4 p-2 h-12  list-none hover:bg-blue-500 duration-300 rounded-lg ">
                    {item.icon}
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav> 

        <navs className={sidebar2 ? 'nav-menu actives right-0 bg-blue-900 w-[120px] h-[100vh] flex justify-end  fixed top-0   duration-[850ms]' : 'nav-menu bg-blue-900 w-[250px] h-[80vh] flex justify-center fixed top-0 right-[-100%]  duration-[750ms] '}>
        <ul className='nav-menu-items w-28' onClick={showSidebar2}>
            <li className='navbar-toggle bg-blue-900 w-28 h-[80px] flex justify-start  items-center'>
              <Link to='#' className='menu-bars text-white ml-10  text-[2rem] bg-none'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
           <ol>
            <Link to="#" className=' text-white text-left flex justify-center items-center ml-4 p-2 h-12 mr-4 list-none hover:bg-blue-500 duration-300 rounded-lg'><CgProfile /> <span> Profile </span></Link>
           </ol>
            </ul>

            

        </navs>
        
        
  </>       
    );

}
 
export default Navbar

