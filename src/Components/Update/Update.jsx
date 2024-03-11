import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { EagleTechSpotContext } from '../../Context/Context'
import UpdateForm from './UpdateForm'

const Update = () => {
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
        productdetails.map(Product=> <UpdateForm key={Product._id} Product={Product}></UpdateForm>)
      }
    </div>
  )
}

export default Update
