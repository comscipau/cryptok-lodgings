import React from 'react'
import styles from '../styles'
import {FaAngleRight} from 'react-icons/fa'
import HERO_IMG from '../assets/HeroImage.png'

const Hero = () => {
  return (
    <div className={`${styles._paddingX} grid md:grid-cols-2 items-center`}>
        <div>
            <h3 className='font-semibold text-2xl text-surface_muted'>HEADER 1</h3>
            <h1 className='font-bold text-[56px] text-surface_muted'>HEADER 1</h1>
            <p className='text-white text-lg font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className={`${styles._raffleBtn}`}>
                    Buy Raffle Tickets
                <span className='text-3xl'>
                    <FaAngleRight/>
                </span>
            </button>
            <p className='font-semibold text-[32px] text-white mt-24'>
                <span className='text-[50px] text-gold'>3</span>D&nbsp;&nbsp;
                <span className='text-[50px] text-gold'>08</span>HRS&nbsp;&nbsp;
                <span className='text-[50px] text-gold'>12</span>M  until the draw
            </p>
        </div>
        <div>
            <img src={HERO_IMG} alt="HERO_IMG" className='ml-7'/>
        </div>
    </div>
  )
}

export default Hero