import React from 'react'
import LOGO from '../assets/Logo.png'
import styles from '../styles'
import {
    FaTelegramPlane,
    FaTwitter,
    FaDiscord,
} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className={`${styles._paddingX} pt-8`}>
        <div className='flex flex-col md:flex-row md:justify-between'>
            <img src={LOGO} alt="logo" className='scale-50 md:scale-100' />
            <div className='flex'>
                <ul className='flex items-center text-white'>
                    <li className='mr-4 hover:cursor-pointer'><FaDiscord size={30}/></li>
                    <li className='mr-4 hover:cursor-pointer'><FaTwitter size={30}/></li>
                    <li className='mr-4 hover:cursor-pointer'><FaTelegramPlane size={30}/></li>
                </ul>
                <button className='bg-gold my-3 px-4 rounded-md ml-4 font-medium text-base'>Connect Wallet</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar