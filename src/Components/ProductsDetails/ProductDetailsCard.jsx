import React from 'react'
import { AiFillStar, AiOutlineRollback } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
const ProductDetailsCard = ({ Product }) => {
    const { _id, type, product, price, image, description, brand, Rating } = Product;
    const navigate = useNavigate()
    const handelback = () => {
        navigate(-1)
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
                        <button className='btn btn-success my-2 flex justify-start items-center gap-2'>add to cart<BsFillCartFill></BsFillCartFill> </button>
                        <button onClick={handelback} className='btn btn-success my-2 mx-2 flex justify-start items-center gap-2'><AiOutlineRollback className='text-lg'></AiOutlineRollback> back </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsCard
