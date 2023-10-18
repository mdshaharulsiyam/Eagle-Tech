import React from 'react'
import { useParams } from 'react-router-dom'
const BrandsProducts = () => {
    const parems =useParams()
    const {brand} = parems 
    console.log(brand)
  return (
    <div>
      <h2>Lorem, ipsum dolor.</h2>
    </div>
  )
}

export default BrandsProducts
