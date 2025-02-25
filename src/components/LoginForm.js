import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import toast from 'react-hot-toast'

const LoginForm = ({setIsLoggedIn}) => {

    const[formData, setFormData] = useState({email:"", password:""})

    const[showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    function changeHandler(event){
        setFormData((prevData) =>({
            ...prevData,
            [event.target.name]:event.target.value

        }))
    }

    function submitHandler(event){
        event.preventDefault()
        setIsLoggedIn(true)
        toast.success("Logged in ")
        navigate("/dashboard")
    }

  return (
    <div>
        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full '>
                <p className='text-[0.9rem] leading-[1.3rem] text-richblack-5 mb-1'>
                    Email Address 
                    <sup className='text-pink-200'>*</sup>
                </p>
                <input
                required
                type='email'
                placeholder='Enter Email Addresss'
                name='email'
                value={formData.email}
                onChange={changeHandler}
                className='bg-richblack-800 w-full rounded-[0.5rem] p-[12px] text-richblack-5'></input>
                
            
            </label>
            <label className='w-full relative'>
                <p className='text-[0.9rem] leading-[1.3rem] text-richblack-5 mb-1'>
                    Password 
                    <sup className='text-pink-200'>*</sup>
                </p>
                <input 
                required
                placeholder='Enter Password'
                value={formData.password}
                name='password'
                type={showPassword ? ("text"):("password")}
                onChange={changeHandler}
                className='bg-richblack-800 w-full rounded-[0.5rem] p-[12px] text-richblack-5'></input>
                

                <span 
                className='absolute right-3 top-9'
                onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>

                <Link to="#">
                    <p className='text-blue-100 text-xs max-w-max ml-auto'>Forgot Password</p>
                </Link>
            </label>

            <button className='bg-yellow-50 font-medium text-richblack-900 px-[12] py-[8px] rounded-[8px] mt-6'>Sign in </button>
        </form>
    </div>
  )
}

export default LoginForm