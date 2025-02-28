import React from 'react'


const Footer = () => {
  return (
    <div>
        <footer className="pt-[200px]">
        <div className="text-sm lg:text-[16px] md:text-[16px] text-gray-600">
            <div className="f1 flex justify-between">
                <div>
                    <h1>Address</h1>
                    <h2>123 Fifth Avenue, USA</h2>
                </div>
                <div><h1 className="text-gray-800 text-2xl">Get In Touch</h1></div>
                <div>
                    <h1>Email Us</h1>
                    <h2>info@example.com</h2>
                </div>
            </div>
    
            <div className="text-center px-[20px] mt-[30px]">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
                <p>ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <br />
            <div className="icons mt-[20px] mb-[15px] text-[23px] space-x-[12px] text-center">
                <a href=""><i className="ri-instagram-fill text-[#00AB84] bg-gray-200 p-[7px] rounded-[50%] hover:bg-[#00AB84] hover:text-white"></i></a>
                <a href=""><i className="ri-facebook-circle-fill text-[#00AB84] bg-gray-200 p-[7px] rounded-[50%] hover:bg-[#00AB84] hover:text-white"></i></a>
                <a href=""><i className="ri-twitter-fill text-[#00AB84] bg-gray-200 p-[7px] rounded-[50%] hover:bg-[#00AB84] hover:text-white"></i></a>
                <a href=""><i className="ri-youtube-fill text-[#00AB84] bg-gray-200 p-[7px] rounded-[50%] hover:bg-[#00AB84] hover:text-white"></i></a>
            </div>
            <div className="text-center mb-[40px]">
                <h1 className="text-2xl font-[600] text-gray-800">Call Us</h1>
                <p className=" mt-[15px]">123-456-7890</p>
            </div>
        </div>
        <div className="f2 text-sm border-t-2 text-gray-600  py-5 flex justify-between">
            <h1>Copyright © 2025 5Leaf Clothing</h1>
            <h2>Powered by 5Leaf Clothing</h2>
        </div>
        </footer>
    </div>
    

  )
}

export default Footer