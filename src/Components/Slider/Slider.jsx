import React from 'react'
import { Link } from 'react-router-dom';

const Slider = ({Product}) => {
    const {_id,type,product,price,image,description,brand,Rating}=Product;
  return (
    <div>
        <div className='container mx-auto flex md:flex-row flex-col-reverse flex-wrap md:justify-center justify-start  gap-2 items-center '>
        <div className='md:w-[49%] w-full flex justify-start items-center text-center md:text-left'>
            <span>
                <h2 className='font-extrabold italic md:text-2xl text-2xl py-3 mx-auto md:mx-0 max-w-[510px] opacity-90 text-'>flash sale</h2>
                <p className='md:text-base font-bold italic text-red-700 opacity-90 py-4'>Up to 30% Cashback for {product}</p>
                <p className='md:text-base tracking-[.5px] text- opacity-90'>Limited-time flash sale! Enjoy up to 30% cashback on select items. Don't miss out on these exclusive savings. Shop now for incredible deals before it's too late!</p>
                <Link to={`/details/${_id}`}><button className='btn bg-orange-500 mt-3'>purchase Now</button></Link>
            </span>
        </div>
        <div className='md:w-[49%] w-full flex md:justify-end justify-center items-center rotate-6 overflow-hidden py-2'>
            <img className='w-full p-4  object-cover' src={image} alt="" />

        </div>
    </div>
    </div>
  )
}

export default Slider
