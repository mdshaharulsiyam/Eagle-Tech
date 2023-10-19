import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { EagleTechSpotContext } from '../../Context/Context'
import Products from '../../Components/Products/Products'
const BrandsProducts = () => {
  const { host } = useContext(EagleTechSpotContext)
    const parems =useParams()
    const {brand} = parems 

    const [productdata,setproductdata]=useState([]);
    console.log(productdata);
    useEffect(()=>{
      fetch(`${host}/addpost/${brand}`).then((res)=>res.json()).then((data)=>setproductdata(data))
    },[])
  return (
    <div className='container mx-auto text-center'>
      <h2 id='servicesectionTitle' className='text-5xl font-semibold italic text-[#FF6969] py-10'>Products</h2>
      <div className='flex flex-wrap justify-center items-center gap-7 py-10'>
        {
            productdata.map(service=> <Products key={service.id} service={service}></Products>)
        }
      </div>
    </div>
  )
}

export default BrandsProducts
