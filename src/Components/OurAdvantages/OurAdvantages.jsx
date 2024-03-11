import { TbShoppingCartDiscount } from 'react-icons/tb';
import { FaShippingFast,FaHandshake } from 'react-icons/fa';
import { RiCustomerService2Fill} from 'react-icons/ri';
import { FcShipped} from 'react-icons/fc';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const OurAdvantages = () => {
    return (
        <div className='container mx-auto my-10'>
            <h2 className=' uppercase text-3xl text-center font-bold py-4 pb-16'>Our Advantages</h2>
       
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>  <div className='text-center box-border p-2 rounded-lg bg-base-300 pb-10'>
                    <TbShoppingCartDiscount className='mx-auto text-8xl'></TbShoppingCartDiscount>
                    <h4 className='text-xl font-bold italic pb-2'>Exclusive Deals & Discounts</h4>
                    <p className='text-xs md:text-base'>Elevate your tech shopping experience with our Exclusive Deals & Discounts. Immerse yourself in a world of special offers and unparalleled savings, transforming every purchase into a rewarding and cost-effective journey through cutting-edge technology.</p>
                </div></SwiperSlide>
                <SwiperSlide>  <div className='text-center box-border p-2 rounded-lg bg-base-300 pb-10'>
                    <FaShippingFast className='mx-auto text-8xl'></FaShippingFast>
                    <h4 className='text-xl font-bold italic pb-2'>Fast & Secure Shipping</h4>
                    <p className='text-xs md:text-base'>Enjoy the assurance of swift and secure shipping at Eagle Tech. Our commitment to delivering your tech products with speed and care ensures they reach you in optimal condition. Experience the convenience of reliable and efficient delivery services that prioritize the safety of your purchases.</p>
                </div></SwiperSlide>
                <SwiperSlide>  <div className='text-center box-border p-2 rounded-lg bg-base-300 pb-10'>
                    <RiCustomerService2Fill className='mx-auto text-8xl'></RiCustomerService2Fill>
                    <h4 className='text-xl font-bold italic pb-2'>Customer-Centric Service</h4>
                    <p className='text-xs md:text-base'>At Eagle Tech, our Customer-Centric Service revolves around your satisfaction. Experience dedicated support tailored to meet all your tech needs. Our commitment goes beyond selling products; it extends to fostering a relationship built on trust, reliability, and exceptional service</p>
                </div></SwiperSlide>
                <SwiperSlide>  <div className='text-center box-border p-2 rounded-lg bg-base-300 pb-10'>
                    <FaHandshake className='mx-auto text-8xl'></FaHandshake>
                    <h4 className='text-xl font-bold italic pb-2'>Quality Assurance</h4>
                    <p className='text-xs md:text-base'>Rest easy with Eagle Tech's unwavering commitment to Quality Assurance. We guarantee that every tech product you choose is reliable, durable, and upholds the highest standards of quality. Trust in our assurance for a seamless tech experience that exceeds expectations</p>
                </div></SwiperSlide>
                <SwiperSlide>  <div className='text-center box-border p-2 rounded-lg bg-base-300 pb-10'>
                    <FcShipped className='mx-auto text-8xl'></FcShipped>
                    <h4 className='text-xl font-bold italic pb-2'>User-Friendly Shopping</h4>
                    <p className='text-xs md:text-base'>Navigate our website effortlessly for a User-Friendly Shopping experience. Immerse yourself in a seamless and enjoyable journey through our curated tech offerings. Explore with ease, discover with joy, and redefine your tech lifestyle with our intuitive and user-centric online platform.</p>
                </div></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default OurAdvantages
