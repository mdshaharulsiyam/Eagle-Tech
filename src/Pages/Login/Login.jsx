import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { EagleTechSpotContext } from '../../Context/Context';
const Login = () => {
    const location = useLocation()
    const [showbutton, setShowBtn] = useState(true)
    const navigate = useNavigate()
    const { signwithpasswordandemail, signinWithGoogle, loading, currentuser } = useContext(EagleTechSpotContext)
    console.log(loading, currentuser)
    if (!loading) {
        if (currentuser) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'logged in successfully',
                showConfirmButton: false,
                timer: 1500
            })
            if (location.state) {
                return navigate(`${location.state}`)
              } else {
                return <Navigate to={'/'}></Navigate>
              }
        



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
        e.preventDefault()
        const password = e.target.password.value
        const email = e.target.email.value
        signwithpasswordandemail(email, password)
    }
    return (
        <div className='py-14 box-border bg-[url("/banner.png")]'>
            <div className='container mx-auto flex justify-center items-center'>
                <div >

                    <h3 className='text-center text-white mb-5 italic text-5xl'>wellcome</h3>
                    <div className='text-center relative rounded pb-20'>
                        {/* {
            loading && <span className="loading absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-10 text-center w-20 loading-spinner text-error"></span>
          } */}
                        <form onSubmit={formSubmit}>
                            <h2 className='text-center text-white italic text-xl py-8'>login</h2>
                            <input type="email" name='email' placeholder="email" className="input input-bordered  text-xl my-2 input-secondary w-full max-w-xs" />
                            <label className='relative'>
                                <input id='password' name='password' type="password" placeholder="password" className="input input-bordered text-xl my-2 input-secondary w-full max-w-xs" /><span onClick={showPassword} className='text-2xl cursor-pointer active:scale-90 absolute right-2 top-[50%] -translate-y-[50%]'>{showbutton ? <HiEyeOff></HiEyeOff> : <HiEye></HiEye>}</span>
                            </label>
                            <button className="block mx-auto px-32 py-2 mt-10 active:scale-90  btn font-extrabold text-lg rounded-lg">login</button>
                            <p className='text-white '>or</p>
                        </form>
                        <button onClick={signinWithGoogle} className='flex font-extrabold gap-1 justify-center btn items-center mx-auto px-16 py-2 my-2  bg-opacity-30 text-black  text-lg rounded-lg'>login wirh Google</button>
                        <p className='text-white font-normal text-base'>don't hava an account ? <Link to={'/signup'} className='text-blue-600 cursor-pointer text-lg underline'>sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
