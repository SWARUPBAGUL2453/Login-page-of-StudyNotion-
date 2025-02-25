import React from 'react'
// import Signup from '../pages/Signup'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import framImage from "../assets/frame.png"
import {FcGoogle} from "react-icons/fc"

const Template = ({title, desc1, desc2, image, formType, setIsLoggedIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 justify-between'>
        <div className='w-11/12 max-w-[450px]'>
            <h1 className='text-richblack-5 font-semibold text-[1.8rem] leading-[2.3rem]'>{title}</h1>
            <p className='text-[1.1rem] leading-[1.6rem] mt-4'>
                <span className='text-richblack-100'>{desc1}</span>
                <br></br>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {formType === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] w-full bg-richblack-100'></div>
                <p className='font-medium leading-[1.3rem] text-richblack-100'>OR</p>
                <div className='h-[1px] w-full bg-richblack-100'></div>
            </div>
            <button className='w-full flex justify-center items-center rounded-[8px] font-medium px-[12px] py-[8px] mt-6 gap-x-2 text-richblack-100 border border-richblack-700'>
                <FcGoogle></FcGoogle>
                <p>Sign up with google</p>
            </button>
        </div>
        <div className='relative w-11/12 max-w-[450px]'>
            <img src={framImage} width={558} height={504} loading='lazy'></img>

            <img src={image} width={558} height={490} loading='lazy' className='absolute -top-4 right-4'></img>

        </div>
    </div>
  )
}

export default Template 