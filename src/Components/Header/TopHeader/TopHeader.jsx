import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail,AiFillInstagram,AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
const TopHeader = () => {
    return (
        <div className='bg-red-400 py-3 text-white'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='flex justify-between items-center gap-4 font-medium'>
                    <a className='flex justify-between items-center gap-1' href="tel:+880156602****"><BsFillTelephoneFill /> +880156602****</a>
                    <a className='flex justify-between items-center gap-1' href="mailto:epictechspot@gmail.com"><AiOutlineMail />epictechspot@gmail.com</a>
                </div>
                <div className='flex text-2xl justify-end items-center gap-2'>
                    <a href="https://www.facebook.com/" target='_blank'><FaFacebook /></a>
                    <a href="https://www.instagram.com/" target='_blank'><AiFillInstagram /></a>
                    <a href="https://www.twitter.com/" target='_blank'><AiFillTwitterCircle /></a>
                </div>
            </div>
        </div>
    )
}

export default TopHeader
