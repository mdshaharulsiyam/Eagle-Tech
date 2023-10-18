import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
const Banner = () => {
    return (
        <div className='bg-[url("/banner.png")] bg-cover bg-no-repeat'>
            <div className='container mx-auto flex md:flex-row flex-col-reverse flex-wrap md:justify-center justify-start  gap-2 items-center '>
                <div className='md:w-[49%] w-full flex justify-start items-center text-center md:text-left'>
                    <span>
                        <h2 className='font-extrabold italic md:text-2xl text-2xl py-3 mx-auto md:mx-0 max-w-[510px] opacity-90 text-white'>Unlock Your Digital Experience and Innovation in the New Digital Era!</h2>
                        <p className='md:text-base italic text-white opacity-90'> Explore cutting-edge tech, elevate your digital experience. Discover style and functionality in our top-tier gadgets. Redefine your tech lifestyle with Eagle Tech Shop..</p>
                        <span className='flex justify-start items-center gap-2'>
                        <p className='font-semibold text-orange-400 my-1 flex justify-start items-center gap-2'>Grab Your 20% Off Today! Use Code <AiOutlineArrowRight></AiOutlineArrowRight> </p>
                        <p className='py-2 rounded-xl inline-block uppercase font-bold px-7 bg-orange-400 my-2 mt-4 mx-auto md:mx-0'>Off20%</p>
                        </span>
                    </span>
                </div>
                <div className='md:w-[49%] w-full flex md:justify-end justify-center items-center  overflow-hidden py-2'>
                    <img className='w-full p-4  object-cover' src='/bannercart.png' alt="" />

                </div>
            </div>

        </div>
    )
}

export default Banner
