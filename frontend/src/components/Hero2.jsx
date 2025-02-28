import React from 'react'
import Title from './Title';
import { Link } from 'react-router-dom';

const Hero2 = () => {
  return (
    <div className='py-15 mt-20 '>
        <div className='text-center text-3xl'>
            <Title text1={'FEATURED'} text2={'SHOPS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>Our one-stop destination for every style, trend, occasion you are shopping for + more  </p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mt-[40px] text-gray-700  justify-between text-center text-[18px] gap-5'>
            <Link to={'/collection'}>
            <div className='flex flex-col justify-center'>
                <p>HOW TO LOOK RICH</p>
                <img src="https://is4.revolveassets.com/images/up/2025/January/012024_rw_shops_howtolookrich_1x.jpg" className='py-[10px] rounded-[20px] ' alt="" />
                <p>Shop Now</p>
            </div>
            </Link>
            <Link>
            <div className='flex flex-col justify-center'>
                <p>DRMR CLUB</p>
                <img src="https://cdn.shopify.com/s/files/1/0591/7009/5177/files/M_DSC8996.jpg?v=1725025451" className='py-[10px] rounded-[20px]'  alt="" />
                <p>Coming Soon</p>
            </div>
            </Link>
            <Link to={'/collection'}>
            <div className='flex flex-col justify-center'>
                <p>COOL GIRL</p>
                <img src="https://is4.revolveassets.com/images/up/2025/January/012024_rw_shops_coolgirlbridal_1x.jpg" className='py-[10px] rounded-[20px]'  alt="" />
                <p>Shop Now</p>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Hero2