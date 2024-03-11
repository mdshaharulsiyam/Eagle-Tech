import React from 'react'
import { Link, useNavigate, useRouteError } from 'react-router-dom'

const Errorelemant = () => {
    const navigate = useNavigate()
    const handelbtn = () => {
        navigate('/')
    }
    const routeerror = useRouteError()
    console.log(routeerror)
    return (
      <div className='text-center py-24 text-5xl text-red-600'>
        <h2>{routeerror.status}</h2>
        <p className='text-3xl'>{routeerror.statusText}</p>
        <p className='text-lg text-black'>{routeerror.data}</p>
        <button onClick={handelbtn} className='btn bg-pink-600 bg-opacity-50 mx-auto text-xl font-bold uppercase my-4 block '>back to home</button>
      </div>
    )
}

export default Errorelemant
