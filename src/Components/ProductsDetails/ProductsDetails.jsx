import React, { useContext, useEffect, useState } from 'react'
import { EagleTechSpotContext } from '../../Context/Context'
import { useParams } from 'react-router-dom'
import ProductDetailsCard from './ProductDetailsCard'

const ProductsDetails = () => {
    const parems = useParams()
    const {id} = parems
    const {host}=useContext(EagleTechSpotContext)
    const [productdetails, setproductdetails] = useState([]);
    console.log(productdetails);
    useEffect(() => {
      fetch(`${host}/productDetails/${id}`).then((res) => res.json()).then((data) => setproductdetails(data))
    }, [])
  return (
    <div>
      {
        productdetails.map(product=> <ProductDetailsCard key={product._id} Product={product}></ProductDetailsCard>)
      }
    </div>
  )
}

export default ProductsDetails
