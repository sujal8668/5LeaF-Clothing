import React from 'react'
import Title from './Title';
import { Link } from 'react-router-dom';

const Opium = () => {
  return (
    <div>
        <div className='text-center py-10 text-3xl'>
        <Title text1={'SHOP'} text2={'OPIUM'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>Our one-stop destination for every style, trend, occasion you're shopping for + more  </p>
        </div>

        <div className=' pb-[30px] grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 text-center content-center text-[18px] text-gray-700  justify-between   gap-5 '>
            <div>
                <img src="https://holyheaden.in/cdn/shop/files/rn-image_picker_lib_temp_a8f72043-acd8-4fc8-bf18-985ef0253004.jpg?v=1734230806&width=493" className='py-[10px] rounded-[20px]' alt="" />
                <p>Opium Hoodie</p>
            </div>
            <div>
                <img src="https://holyheaden.in/cdn/shop/files/rn-image_picker_lib_temp_9af67e55-adb5-4234-a40c-2537a66ac61c.jpg?v=1735086182&width=600" className='py-[10px] rounded-[20px]' alt="" />
                <p>Opium Pants</p>
            </div>
            <div>
                <img src="https://holyheaden.in/cdn/shop/files/rn-image_picker_lib_temp_749a9c98-57fa-407a-9541-0c6ceec29855.jpg?v=1734940171&width=493" className='py-[10px] rounded-[20px]' alt="" />
                <p>Opium Vest</p>
            </div>
            <div>
                <img src="https://holyheaden.in/cdn/shop/files/20241225-224233.jpg?v=1735146911&width=493" className='py-[10px] rounded-[20px]' alt="" />
                <p>Opium Jacket</p>
            </div>

        </div>

        <Link className='text-center flex justify-center pb-[70px] text-xl items-center text-gray-700  '>
            <p className='border-2 border-gray-700 w-[200px] py-[10px] hover:bg-gray-700 hover:text-white duration-[.2s] rounded-[10px]'>SHOP OPIUM</p>
        </Link>

        <div className='h-[80vh] fix text-[16px] text-black content-center rounded-[10px]  '>
            <div className='bg-[#ffffffac] w-[300px] m-auto md:w-[400px] px-[20px] py-[30px] text-center text-gray-500 rounded-[10px]'>
                <p className='text-gray-700 '>OUR GUARANTEE</p>
                <br />
                <p className='text-gray-700 '>Our Commitment to You</p>
                <br /> <br />
                <p><span className='text-gray-700 uppercase'>Premium Quality:</span> Every product we offer boasts unparalleled comfort and unmatched quality.</p>
                <br />
                <p><span className='text-gray-700 uppercase'>Free Shipping & Delivery:</span> Enjoy complimentary shipping and delivery on all orders across India.</p>
                <br />
                <p><span className='text-gray-700 uppercase'>24/7 Support:</span> We are here for you around the clock. Reach out to us anytime, day or night, through email and social media"</p>
            </div>

        </div>
    </div>
  )
}

export default Opium