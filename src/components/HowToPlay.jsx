import React from 'react'
import styles from '../styles'

const HowToPlay = () => {
  return (
    <div className={`${styles._paddingX} pt-16 pb-24 bg-gradient-to-t from-gold via-surface_cryptok to-surface_cryptok`}>
        <div className='flex justify-center'>
            <span className='font-bold text-[65px] text-white text-center'>HOW TO PLAY</span>
        </div>
        <div className='grid md:grid-cols-3 gap-8 mt-16'>
            <div className='bg-gold rounded-xl shadow-lg shadow-[#040c16] py-[35px] px-[27px]'>
                <h3 className='font-semibold text-2xl text-surface_cryptok'>BUY RAFFLE TICKET</h3>
                <p className='font-normal text-base text-black py-8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.
                </p>
                <p className='font-normal text-base text-surface_cryptok text-right'>Step 1</p>
            </div>
            <div className='bg-gold rounded-xl shadow-lg shadow-[#040c16] py-[35px] px-[27px]'>
                <h3 className='font-semibold text-2xl text-surface_cryptok'>WAIT FOR THE DRAW</h3>
                <p className='font-normal text-base text-black py-8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.
                </p>
                <p className='font-normal text-base text-surface_cryptok text-right'>Step 2</p>
            </div>
            <div className='bg-gold rounded-xl shadow-lg shadow-[#040c16] py-[35px] px-[27px]'>
                <h3 className='font-semibold text-2xl text-surface_cryptok'>CHECK FOR PRICES</h3>
                <p className='font-normal text-base text-black py-8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.
                </p>
                <p className='font-normal text-base text-surface_cryptok text-right'>Step 3</p>
            </div>
        </div>
    </div>
  )
}

export default HowToPlay