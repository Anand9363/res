import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='2xl:container mx-auto'>
                <div className='w-[100%] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 bg-slate-800 py-20'>
                    <div className='px-40 text-white '>
                        <p className='font-Dancing text-4xl flex flex-row  justify-center items-center text-center'>Contact Us</p>
                        <p className='flex flex-row justify-center items-center  text-center gap-2 pt-4'> 
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
     
    >
      <path
        fill="currentColor"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"
      ></path>
    </svg>
 
Location</p>
                        <p className='flex flex-row justify-center items-center  text-center gap-2 py-4'> Call +91 1234567890</p>
                        <p className='flex flex-row justify-center items-center  text-center gap-2  '> demo@gmail.com</p>
                    </div>
                    <div className='px-40 text-white'>
                        <p  className='font-Dancing text-4xl flex flex-row  justify-center items-center text-center'>Feane</p>
                        <p className='flex flex-row justify-center items-center  text-center gap-2 pt-4'>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
                        </p>
                        
                    </div>
                    <div className='px-40 text-white'>
                        <p  className='font-Dancing text-4xl flex flex-row  justify-center items-center text-center'>Opening Hours</p>
                        <p className='flex flex-row justify-center items-center  text-center gap-2 py-3'>Everyday</p>
                        <p className='flex flex-row justify-center items-center  text-center gap-2 '>10.00 Am -10.00 Pm</p>
                    </div>

                </div>

            </div>
            <div className='bg-slate-800 justify-center items-center text-center pb-36'>
                <p className='text-white py-4'>© 2025 All Rights Reserved By Free Html Templates</p>
            <p className='text-white'>© Distributed By ThemeWagon</p>
            </div>

        </>
    )
}

export default Footer
