import React, { useContext, useEffect, useState } from 'react'
import { EagleTechSpotContext } from '../../Context/Context';
import CartItems from './CartItems';

const Cart = () => {
    const {host}=useContext(EagleTechSpotContext)
    const [loadin, setloading] = useState(true)
  const [curtdata, setcurtdata] = useState([]);
  useEffect(() => {
    setloading(true)
    const fetchdata = async () => {
      const res = await fetch(`${host}/addcurt`)
      const data = await res.json()
      setcurtdata(data)
      setloading(false)
    }
    fetchdata()
  }, [])
  if (loadin) {
    return <div className='min-h-[400px]'><span className="loading absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-10 text-center w-20 loading-spinner text-error"></span></div>
  }
  return (
    <div>
      {
        (curtdata.length<=0)?<h2>no curt item found</h2>: <div className='container mx-auto text-center'>
        <h2 id='servicesectionTitle' className='text-5xl font-semibold italic uppercase text-[#FF6969] py-10'>MY Curt</h2>
        <div className='flex flex-wrap justify-center items-center gap-7 py-10'>
          {
            curtdata.map(Product => <CartItems key={Product._id} Product={Product}></CartItems>)
          }
        </div>
      </div>
      }
    </div>
  )
}

export default Cart
