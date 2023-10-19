
import { Link } from 'react-router-dom'
import { AiFillStar, AiOutlineRollback } from 'react-icons/ai';
const CartItems = ({Product}) => {
    const { _id, type, product, price, image, description, brand, Rating } = Product;
    const style = {
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
    }
  return (
    <div style={style} className='max-w-sm relative overflow-hidden rounded hover:scale-110 cursor-pointer' >
    <img className='lg:w-96 w-96  md:w-80 h-60 object-cover' src={image} alt="" />
    <div className=' absolute w-full h-full top-0 flex justify-center items-center left-0 bg-black bg-opacity-70 text-white pt-2'>
        <span className=''>
            <h3 className='text-xl font-semibold italic'>{brand}</h3>
            <h4>{product}</h4>
            <p className='text-xs my-1'>price : BDT {price}</p>
            <p className=' text-xs flex justify-center items-center gap-2 mb-3'>Rating : {Rating} <AiFillStar></AiFillStar></p>
            <Link className='rounded py-1 px-2 m-2 bg-red-400' to={`/details/${_id}`}><button>details</button></Link>
            <Link className='rounded py-1 px-2 m-2 bg-red-400' to={`/update/${_id}`}><button>update</button></Link>
        </span>
    </div>

</div>
  )
}

export default CartItems
