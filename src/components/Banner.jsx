import React from 'react'
import Image from 'next/image'
import BanImg from '@/assets/banner.png'

const Banner = () => {
  return (
    <>
      <section className=''>
        <Image src={BanImg} alt='latest_product'/>
      </section>
    </>
  )
}

export default Banner
