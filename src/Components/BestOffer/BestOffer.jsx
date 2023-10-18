import React from 'react'

const BestOffer = () => {
  return (

    <div className='container mx-auto flex md:flex-row flex-col-reverse flex-wrap md:justify-center justify-start  gap-2 items-center '>
        <div className='md:w-[49%] w-full flex justify-start items-center text-center md:text-left'>
            <span>
                <h2 className='font-extrabold italic md:text-2xl text-2xl py-3 mx-auto md:mx-0 max-w-[510px] opacity-90 text-'>Best Offer for you</h2>
                <p className='md:text-base font-bold italic text-red-700 opacity-90 py-4'>Up to 50% Cashback</p>
                <p className='md:text-base tracking-[.5px] text- opacity-90'>Unlock unparalleled savings with Eagle Tech! Enjoy up to 50% Cashback on purchase iphone 15 ultra. Elevate your digital lifestyle and maximize your savings with every order. Upgrade your tech game and experience a rewarding shopping spree like never before!</p>
                <button className='btn mt-3'>purchase now</button>
            </span>
        </div>
        <div className='md:w-[49%] w-full flex md:justify-end justify-center items-center  overflow-hidden py-2'>
            <img className='w-full p-4  object-cover' src='/iphone.webp' alt="" />

        </div>
    </div>
  )
}

export default BestOffer
