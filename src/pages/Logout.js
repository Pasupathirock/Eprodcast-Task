import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'


const Logout = () => {
    return (
      <div>
        <div className='  h-[75vh] w-full bg-white flex flex-col justify-center items-center'>
           <h1 className=' text-2xl font-semi '> Log out  </h1> 
           <Link to="/" className=' p-2 mt-2 rounded-lg  border hover:scale-110 duration-300 hover:bg-slate-500 hover:text-yellow-400 bg-slate-700 text-white'> Go to Home Page</Link>
           
        </div>
       <Footer />
       </div>
    )
}

export default Logout
