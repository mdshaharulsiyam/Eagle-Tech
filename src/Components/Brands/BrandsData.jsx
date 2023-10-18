import React from 'react'
import { Link } from 'react-router-dom';

const BrandsData = ({singlebrand}) => {
    const {id,img,brand}=singlebrand;
    console.log(id,img,brand)
    const style = {
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
    }
  return (
    <div style={style} className='max-w-sm relative transition-all overflow-hidden rounded hover:scale-110 cursor-pointer' >
      <img className='lg:w-64 w-64  md:w-64 h-56 object-cover' src={img} alt="" />
      <div id='serviceCardcaption' className=' absolute w-full h-full top-[60%] left-0 bg-black bg-opacity-70 text-white pt-2'>
        <h4 className='text-xl tracking-[1px] italic font-bold'>{brand}</h4>
        <Link to={`/ServiceDetails/${id}`}><button className='font-semibold text-base italic mt-2 bg-[#CD979A] p-1 px-7 rounded'>see products..</button></Link>
      </div>
    </div>
  )
}

export default BrandsData
