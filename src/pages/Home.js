import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'


const Home = () => {

    const history = useNavigate();

    const NextPage= (e) => {
        e.preventDefault();

        history('/Screen2');

    }
    return (
        <div className=' container'>
        <div className=' h-[75vh] w-[100vw] bg-white flex justify-center items-center'>
          <div className=' flex justify-center items-center bottom-0'>
            <img className=' w-96 h-96 hover:rotate-[360deg] duration-[850ms] ' src="https://static01.nyt.com/images/2019/06/06/business/06deutsche1/merlin_154975497_953ae4ea-1861-4f1d-85d1-6ba352c36967-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="sample image" />
            <Link to="/Screen2"  className=' absolute font-medium text-red-500 uppercase  p-2 rounded-lg  border'
            onClick={NextPage} > explore more</Link>
          </div>
        </div>
        <Footer />
        </div>
    )
}

export default Home
