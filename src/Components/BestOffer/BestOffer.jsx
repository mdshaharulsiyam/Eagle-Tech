import React from 'react'
import { Link } from 'react-router-dom'

const BestOffer = () => {
  return (

    <div className='container mx-auto flex md:flex-row flex-col-reverse flex-wrap md:justify-center justify-start  gap-2 items-center'>
        <div className='md:w-[49%] w-full flex justify-start items-center text-center md:text-left'>
            <span>
                <h2 className='font-extrabold italic md:text-2xl text-2xl py-3 mx-auto md:mx-0 max-w-[510px] opacity-90 text-'>Best Offer for you</h2>
                <p className='md:text-base font-bold italic text-red-700 opacity-90 py-4'>Up to 50% Cashback on your first order</p>
                <p className='md:text-base tracking-[.5px] text- opacity-90'>Unlock unparalleled savings with Eagle Tech! Enjoy up to 50% Cashback on purchase iphone 15 ultra. Elevate your digital lifestyle and maximize your savings with every order. Upgrade your tech game and experience a rewarding shopping spree like never before!</p>
                <Link to={'/brandsproducts/Apple'}><button className='btn mt-3'>Shop now</button></Link>
            </span>
        </div>
        <div className='md:w-[49%] w-full flex md:justify-end justify-center items-center  overflow-hidden py-2'>
            <img className='w-full p-4  object-cover' src='/firstorder.png' alt="" />

        </div>
    </div>
  )
}

export default BestOffer
