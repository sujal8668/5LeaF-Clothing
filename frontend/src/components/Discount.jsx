import React from 'react'

const Discount = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className='text-center discount text-white py-[70px] px-2 mt-20 rounded-[10px]'>
        <p className='text-2xl font-medium '>Subscibe Now and get 20% off</p>
        <br />
        <p className=' text-[16px] mt-3 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, dolorum.</p>
        <br />
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' >
            <input className='w-full sm:flex-1 outline-none  text-lg bg-transparent ' type="email" placeholder='Enter your email' required />
            <button className=' cursor-pointer border text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
        </form>

    </div>
  )
}

export default Discount