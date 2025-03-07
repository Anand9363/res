import React from 'react'
import read from "../src/assets/read.png"
// import f1 from "../src/assets/f1.png"

const Read = () => {
  return (
    <div>
      <div className='2xl:container mx-auto'>
        <div className='w-[100%] mx-auto grid grid-cols-1 md:grid-cols-2 bg-slate-800 py-9 justify-center items-center'>
            <div className='flex flex-row justify-center items-center' >
                <img src={read} alt="" />
            </div>
            <div className='text-white'>
                <p className='text-6xl font-Dancing'>We Are Feane</p>
                <p className='pt-5 mr-28 text-[16px] leading-[24px]  '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                <button className="bg-yellow-500 mt-10 text-white px-4 py-2  rounded-full flex items-center gap-2 hover:bg-yellow-600">Read More</button>
            </div>

        </div>
 
      </div>
    </div>
  )
}

export default Read
