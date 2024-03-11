import React, { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useState } from 'react';
import { EagleTechSpotContext } from '../../Context/Context';
import Swal from 'sweetalert2';
const SignUp = () => {
    const navigate = useNavigate()
    const {signupuser,loading,currentuser}=useContext(EagleTechSpotContext)
    const [showbutton, setShowBtn] = useState(true)
    if (!loading) {
        if (currentuser) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'user logged in',
              showConfirmButton: false,
              timer: 1500
            })
            return <Navigate to={'/'}></Navigate>
        }
      }
      
    const showPassword = (e) => {
        const passwordField = document.querySelector('#password')
        if (passwordField.type === 'password') {
          passwordField.type = 'text'
          setShowBtn(false)
        } else {
          passwordField.type = 'password'
          setShowBtn(true)
        }
      }
      const formSubmit = e => {
        let error = [];
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;
        const username = e.target.username.value;
        console.log(password,email,username)
        const passwordLength = /.{6,}/;
        const specialCharacter = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g;
        const uppercase = /[A-Z]/;
        if (!passwordLength.test(password)) {
            error = [...error,'Password should be at least 6 characters long']
        }

        if (!specialCharacter.test(password)) {
            error = [...error,'Password should contain at least one special character']
        }

        if (!uppercase.test(password)) {
            error = [...error,'Password should contain at least one uppercase letter']
        }
        if (error.length>0) {
           const msg = error[0]
           Swal.fire(
            'opps!!',
            `${msg}`,
            'error'
          )
            
        }else{
            signupuser(password,email,username)
        }
    };
  return (
    <div className='py-14 box-border bg-[url("/banner.png")]'>
    <div className='container mx-auto flex justify-center items-center'>
      <div >

        <h3 className='text-center text-white mb-5 italic text-5xl'>wellcome</h3>
        <div className='text-center relative rounded pb-20'>
          {
            loading && <span className="loading absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-10 text-center w-20 loading-spinner text-error"></span>
          }
          <form onSubmit={formSubmit}>
            <h2 className='text-center text-white italic text-xl py-8'>sign up</h2>
            <input type="text" name='username' placeholder="usename" className="input input-bordered  text-xl my-2 input-secondary w-full max-w-xs" /><br />
            <input type="email" name='email' placeholder="email" className="input input-bordered  text-xl my-2 input-secondary w-full max-w-xs" />
            <label className='relative'>
              <input id='password' name='password' type="password" placeholder="password" className="input input-bordered text-xl my-2 input-secondary w-full max-w-xs" /><span onClick={showPassword} className='text-2xl cursor-pointer active:scale-90 absolute right-2 top-[50%] -translate-y-[50%]'>{showbutton ? <HiEyeOff></HiEyeOff> : <HiEye></HiEye>}</span>
            </label>
            <button className="block mx-auto px-32 py-2 mt-10 active:scale-90  btn font-extrabold text-lg rounded-lg">sign up</button>
            <p className='text-white '>or</p>
          </form>
          <p className='text-white font-normal text-base'>allready hava an account ? <Link to={'/login'} className='text-blue-600 cursor-pointer text-lg underline'>login</Link></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUp
