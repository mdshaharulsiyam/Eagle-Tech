import React, { useEffect, useState } from 'react'
import BrandsData from './BrandsData'

const Brands = () => {
    const [Brands, setBrands] = useState([])
    useEffect(() => {
      fetch('./brands.json').then((res) => res.json()).then((data) => setBrands(data))
  
    }, [])
  return (
    <div className='container mx-auto text-center'>
    <h2 className='text-5xl font-semibold italic uppercase text-[#FF6969] py-10'>brands</h2>
    <div className='flex flex-wrap justify-center items-center gap-7 py-10'>
      {
          Brands.map(brand=> <BrandsData key={brand.id} singlebrand={brand}></BrandsData>)
      }
    </div>
  </div>
  )
}

export default Brands
