import React,{useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { useForm } from "react-hook-form";
import Footer from '../components/Footer'
import "./Screen2.css"
import { Link } from 'react-router-dom';

const Screen2 = () => {
    const [modal, setModal] = useState(false);

    const Pop = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    const { register, handleSubmit, formState: { errors },reset,trigger } = useForm();
     const [userInfo,setUserInfo] = useState();

     const onSubmit = (data) => { 
	 setUserInfo(data);
	 console.log(data);  
	 };


    return (
        <div className=' container'>
            
        <div className=' h-[75vh] w-[100vw] bg-white flex flex-col justify-center items-center'>
        <Link to="/Eprodcast_task" className=' p-2 mt-2 rounded-lg  hover:scale-110 duration-300 hover:bg-slate-500 hover:text-yellow-400 border-2 border-yellow-400 text-red-600 font-semibold'> Go Back</Link>
          <div className=' flex justify-center items-center bottom-0'>
            <img className=' w-96 h-96 mt-2  ' src="https://chandigarhmetro.com/wp-content/uploads/2020/02/how-to-create-perfect-image.jpg" alt="sample image" />
            <button onClick={Pop}  className=' absolute font-medium text-green-500 uppercase border-yellow-400 border-2  p-2 rounded-lg  hover:scale-110 duration-300 hover:bg-slate-500 hover:text-yellow-400'
             > Add </button>
             {modal && (
        <div className="modal">
          <div onClick={Pop} className="overlay"></div>
          <div className="modal-content">
            <h2>create your profile first</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='p-2'>
      <div className="show"><pre>{JSON.stringify(userInfo,undefined,2)}</pre> </div>
       <div>
       <input type="text" placeholder="Enter name" {...register("Name", {required: " name is required ",minLength:{ value:3,message:"minimum 3 words use" } })}  onKeyUp={ () => {trigger('Name') }}  />
         <div className="errors1  text-red-500 font-medium text-sm"> {errors.Name && <span>{errors.Name.message}</span> } </div>
        </div> 
        <div className='mt-2'>
        <input type="email" placeholder="Enter  validate Email" {...register("Email", {required: 'Email is required', pattern:{ value:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ ,message:'please enter valid Email'} })}  onKeyUp={ () => {trigger('Email') }}/>
        <div className="errors1  text-red-500 font-medium text-sm"> {errors.Email && <span>{errors.Email.message}</span>}</div>
        </div>

        <div className='mt-2'>
        <input type="nums" placeholder="Enter Mobile number" {...register("MobileNumber", {required: 'Mobile number is reqired',pattern:{value:/^[7-9][0-9]{9}$/ ,message:"Mobile number is only 10 digits"}  })} onKeyUp={ () => {trigger('gender') }} />
        <div className="errors1  text-red-500 font-medium text-sm"> {errors.MobileNumber &&  <span>{errors.MobileNumber.message}</span> } </div>
        </div>
        <div className="errors1  text-red-500 font-medium text-sm">{errors.course && <span>{errors.course.message}</span> }</div>
        <div className='mt-2'>
        <button className=' p-1 bg-green-400 rounded-lg hover:bg-green-700 duration-300' type="submit" >Submit</button>

         <button className=' p-1 bg-yellow-300 hover:bg-yellow-500 duration-300 rounded-lg ml-4'  type="reset" onClick={() => {
            reset({
              Name:"",
              Email:"",
              MobileNumber:"",
            });
          }}
          >Reset
        </button>
        </div>
      
      </form>
            <button className="close-modal" onClick={Pop}>
             <AiOutlineClose/>
            </button>
          </div>
        </div>
      )}
          </div>
        </div>
        <Footer />
        </div>
    )
}

export default Screen2
