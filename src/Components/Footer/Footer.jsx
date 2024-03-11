import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillInstagram,AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='bg-base-300'>
            <footer className="footer p-10 container mx-auto text-base-content">
                <nav className=''>
                    <Link to={'/'} className="flex gap-1 justify-start items-center">
                        <img className="w-16" src="/Eagle_Tech.png" alt="" />
                        <a className="normal-case text-3xl text-red-600 italic font-bold">Eagle Tech</a>
                    </Link>
                    <p className='text-xl font-bold'>About Us</p>
                    <p>Address: 685 Lane Drive St. California, Auto club 33020 <br />
                        Phone: +8801500000000 <br />
                        Fax: +8801500000000 <br />
                        E-mail: eagletech@gmail.com</p>
                </nav>
                <nav>
                    <header className="footer-title">menu</header>
                    <ul className='list-none'>
                        <li className="uppercase py-1"><Link to={'/'}>Home</Link></li>
                        <li className="uppercase py-1"><Link to={'/addproduct'}>Add Product</Link></li>
                        <li className="uppercase py-1"><Link to={'/mycart'}>My Cart</Link></li>
                        <li className="uppercase py-1"><Link to={'/login'}>Login</Link></li>
                    </ul>
                </nav>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4 text-3xl">
                    <a href="https://www.facebook.com/" target='_blank'><FaFacebook /></a>
                    <a href="https://www.instagram.com/" target='_blank'><AiFillInstagram /></a>
                    <a href="https://www.twitter.com/" target='_blank'><AiFillTwitterCircle /></a>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default Footer
