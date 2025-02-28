
import Title from './Title';

const NewArrivals = () => {
  return (
    <div className='pb-15 '>
        <div className='text-center pb-10 text-3xl'>
            <Title text1={'SOON'} text2={'ARRIVING'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>Our one-stop destination for every style, trend, occasion you are shopping for + more  </p>
        </div>
        <video className="w-full rounded-[10px]" autoplay:true loop controls muted>
          <source src="/src/assets/23ee15d62c7b4ffbb502c5a5ac5c1f76.mp4" type="video/mp4" />
        </video>
    </div>
  )
}

export default NewArrivals