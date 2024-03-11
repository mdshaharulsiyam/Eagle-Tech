import React, { useContext, useEffect, useState } from 'react'
import { EagleTechSpotContext } from '../../Context/Context';
import CartItems from './CartItems';
import Swal from 'sweetalert2';

const Cart = () => {
    const {host}=useContext(EagleTechSpotContext)
    const [loadin, setloading] = useState(true)
  const [curtdata, setcurtdata] = useState([]);
  const [changedata,setchangedata]= useState(false)
  console.log(changedata)
  const removeitem = (id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
      if (result.isConfirmed) {
        console.log(id)
          fetch(`${host}/deleteproduct/${id}`, {
              method: 'DELETE'
          }).then((res) => res.json()).then((data) => {
              console.log(data)
              if (data.deletedCount) {
                setchangedata(!changedata)
                  Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                  )
               
              }
              
          })

      }
  })
  }
  useEffect(() => {
    setloading(true)
    const fetchdata = async () => {
      const res = await fetch(`${host}/addcurt`)
      const data = await res.json()
      setcurtdata(data)
      setloading(false)
    }
    fetchdata()
  }, [changedata])
  if (loadin) {
    return <div className='min-h-[400px]'><span className="loading absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-10 text-center w-20 loading-spinner text-error"></span></div>
  }
  return (
    <div>
      <h3 className='text-center font-bold text-3xl uppercase my-5'>my curt</h3>
      {
        (curtdata.length<=0)?<h2 className='text-4xl text-red-500 font-semibold text-center my-36'>no curt item found</h2>: <div className='container mx-auto text-center'>
        <h2 id='servicesectionTitle' className='text-5xl font-semibold italic uppercase text-[#FF6969] py-10'>MY Curt</h2>
        <div className='flex flex-wrap justify-center items-center gap-7 py-10'>
          {
            curtdata.map(Product => <CartItems key={Product._id} removeitem={removeitem} Product={Product}></CartItems>)
          }
        </div>
      </div>
      }
    </div>
  )
}

export default Cart
