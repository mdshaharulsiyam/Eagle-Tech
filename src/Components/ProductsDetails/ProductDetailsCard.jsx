import React, { useContext } from 'react'
import { AiFillStar, AiOutlineRollback } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import {  useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { EagleTechSpotContext } from '../../Context/Context';
const ProductDetailsCard = ({ Product }) => {
    const {host}=useContext(EagleTechSpotContext)
    const { _id, type, product, price, image, description, brand, Rating } = Product;
    const navigate = useNavigate()
    const handelback = () => {
        navigate(-1)
    }
    const handeldelete = () => {
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
                fetch(`${host}/productDetails/${_id}`, {
                    method: 'DELETE'
                }).then((res) => res.json()).then((data) => {
                    console.log(data)
                    if (data.acknowledged) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        navigate(-1)
                    }
                    
                })

            }
        })
    }
    const addTocart = ()=>{
        fetch(`${host}/addcurt`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Product)
        })
            .then((res) => res.json())
            .then((data) => {

                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'product added succesfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch((error) => console.error('Error:', error));

    }
    return (
        <div className='my-11 container mx-auto'>

            <div className='flex justify-center flex-col md:flex-row gap-[2%] items-center my-10 py-4'>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className='md:w-[49%] w-full'>
                    <img className='w-full object-cover h-full' src={image} alt="" />
                </div>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='md:w-[49%] w-full '>
                    <button className='bg-[#CAB7A6] tracking-[1px] p-2 px-4 my-2 text-xl font-extrabold rounded-full text-white'>{brand}</button>
                    <h4 className='text-2xl py-5 font-semibold italic text-[#FF6969]'>{product}</h4>
                    <p className='text-lg tracking-[1px]'>{description}</p>
                    <p className='font-bold text-lg'>price : BDT {price}</p>
                    <p className='font-semibold text-lg flex justify-start items-center gap-2'>Rating : {Rating} <AiFillStar></AiFillStar></p>
                    <div className='flex justify-start items-center gap-2'>
                        <button onClick={addTocart} className='btn btn-success my-2 flex justify-start items-center gap-2'>add to cart<BsFillCartFill></BsFillCartFill> </button>
                        <button onClick={handelback} className='btn btn-success my-2 mx-2 flex justify-start items-center gap-2'><AiOutlineRollback className='text-lg'></AiOutlineRollback> back </button>
                        <button onClick={handeldelete} className='btn bg-red-500'>delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsCard
