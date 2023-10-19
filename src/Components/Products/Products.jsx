import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {

    const style = {
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
    }
  return (
    <div style={style} className='max-w-sm relative overflow-hidden rounded hover:scale-110 cursor-pointer' >
      <img className='lg:w-96 w-96  md:w-80 h-60 object-cover' src='' alt="" />
      <div id='serviceCardcaption' className=' absolute w-full h-full top-[70%] left-0 bg-black bg-opacity-70 text-white pt-2'>
        <h3 className='text-xl font-semibold italic'></h3>
        <h4></h4>
        <Link to={`/ServiceDetails/`}><button className='font-semibold text-base italic mt-5 bg-[#CD979A] p-2 px-7 rounded'>more..</button></Link>
      </div>
    </div>
  )
}

export default Products
