import React, { useContext, useEffect, useState } from 'react'
import { BiBlock } from 'react-icons/bi';
import { useParams } from 'react-router-dom'
import { EagleTechSpotContext } from '../../Context/Context'
import Products from '../../Components/Products/Products'
import Carousel from "nuka-carousel"
import Slider from '../../Components/Slider/Slider'
import { RiH4 } from 'react-icons/ri'
const BrandsProducts = () => {
  const { host } = useContext(EagleTechSpotContext)
  const parems = useParams()
  const { brand } = parems
  const [loadin, setloading] = useState(true)
  const [productdata, setproductdata] = useState([]);
  console.log(productdata);
  useEffect(() => {
    setloading(true)
    const fetchdata = async () => {
      const res = await fetch(`${host}/addpost/${brand}`)
      const data = await res.json()
      setproductdata(data)
      setloading(false)
    }
    fetchdata()
  }, [])
  if (loadin) {
    return <div className='min-h-[400px]'><span className="loading absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-10 text-center w-20 loading-spinner text-error"></span></div>
  }
  return (
    (productdata.length <= 0) ? <h4 className='flex justify-center items-center text-4xl text-red-400 min-h-[400px]'>No products founds <BiBlock className='ml-3'></BiBlock> </h4> : <div>
      <Carousel>
        {
          productdata.slice(0, 3).map(Product => <Slider key={Product._id} Product={Product}></Slider>)
        }
      </Carousel>
      <div className='container mx-auto text-center'>
        <h2 id='servicesectionTitle' className='text-5xl font-semibold italic text-[#FF6969] py-10'>Products</h2>
        <div className='flex flex-wrap justify-center items-center gap-7 py-10'>
          {
            productdata.map(Product => <Products key={Product._id} Product={Product}></Products>)
          }
        </div>
      </div>
    </div>
  )
}

export default BrandsProducts
