// import React from 'react'
// import f1 from "../src/assets/f1.png"


// const HeroSection = () => {
//     return (
//         <>
//             <div className='2xl:container mx-auto py-5'>
//                 <div className='w-[90%] mx-auto grid grid-cols-1'>
//                     <div className='flex flex-row justify-center items-center'>
//                         <h1 className='font-Dancing text-[40px] leading-[48px]'>Our Menu</h1>
//                     </div>

                    
//                     <ul className="flex flex-col justify-center items-center font-Open pt-6 gap-10 md:flex md:flex-row">
//                         <a href="">  <li className=' hover:bg-black rounded-3xl px-6 py-2 hover:text-white ' >All</li></a>
//                         <a href="">  <li className=' hover:bg-black rounded-3xl px-6 py-2 hover:text-white'>Burger</li></a>
//                         <a href="">  <li className=' hover:bg-black rounded-3xl px-6 py-2 hover:text-white' >Pizza</li></a>
//                         <a href="">  <li className=' hover:bg-black rounded-3xl px-6 py-2 hover:text-white' >Pasta</li></a>
//                         <a href="">  <li className=' hover:bg-black rounded-3xl px-6 py-2 hover:text-white' >Fries</li></a>
//                     </ul>


//                     <div className='2xl:container mx-auto py-9'>
//                         <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 '>
//                             <div>
//                                 <div className='flex flex-col justify-center items-center '>
//                                     <img src={f1} className='h-32 hover:scale-110  ' alt="" srcset="" />
//                                     <div className='bg-slate-800 text-white font-Open p-5 rounded-b-3xl  flex flex-row'>
//                                         <div className='space-y-3'>
//                                             <p className='text-[20px] leading-[24px] font-bold'>Delicious Pizza</p>
//                                             <p className='text-[15px] leading-[23px]'>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
//                                             <p className='text-[15px] leading-[23px] pt-4'>$20</p>
//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>



//                             <div>
//                                 <div>
//                                     <div className='flex flex-col justify-center items-center '>
//                                         <img src={f1} className='h-32 hover:scale-110  ' alt="" srcset="" />
//                                         <div className='bg-slate-800 text-white font-Open p-5 rounded-b-3xl'>
//                                             <div className='space-y-3'>
//                                                 <p className='text-[20px] leading-[24px] font-bold'>Delicious Burger</p>
//                                                 <p className='text-[15px] leading-[23px]'>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
//                                                 <p className='text-[15px] leading-[23px] pt-4'>$20</p>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>


//                             <div>
//                                 <div>
//                                     <div className='flex flex-col justify-center items-center '>
//                                         <img src={f1} className='h-32 hover:scale-110  ' alt="" srcset="" />
//                                         <div className='bg-slate-800 text-white font-Open p-5 rounded-b-3xl'>
//                                             <div className='space-y-3'>
//                                                 <p className='text-[20px] leading-[24px] font-bold'>Delicious Burger</p>
//                                                 <p className='text-[15px] leading-[23px]'>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
//                                                 <p className='text-[15px] leading-[23px] pt-4'>$20</p>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>


//                             <div>
//                                 <div>
//                                     <div className='flex flex-col justify-center items-center '>
//                                         <img src={f1} className='h-32 hover:scale-110  ' alt="" srcset="" />
//                                         <div className='bg-slate-800 text-white font-Open p-5 rounded-b-3xl'>
//                                             <div className='space-y-3'>
//                                                 <p className='text-[20px] leading-[24px] font-bold'>Delicious Burger</p>
//                                                 <p className='text-[15px] leading-[23px]'>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
//                                                 <p className='text-[15px] leading-[23px] pt-4'>$20</p>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div>
//                                 <div>
//                                     <div className='flex flex-col justify-center items-center '>
//                                         <img src={f1} className='h-32 hover:scale-110  ' alt="" srcset="" />
//                                         <div className='bg-slate-800 text-white font-Open p-5 rounded-b-3xl'>
//                                             <div className='space-y-3'>
//                                                 <p className='text-[20px] leading-[24px] font-bold'>Delicious Burger</p>
//                                                 <p className='text-[15px] leading-[23px]'>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
//                                                 <p className='text-[15px] leading-[23px] pt-4'>$20</p>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>



//                             <div>
//                                 <div>
//                                     <div className='flex flex-col justify-center items-center '>
//                                         <img src={f1} className='h-32 hover:scale-110  ' alt="" srcset="" />
//                                         <div className='bg-slate-800 text-white font-Open p-5 rounded-b-3xl'>
//                                             <div className='space-y-3'>
//                                                 <p className='text-[20px] leading-[24px] font-bold'>Delicious Burger</p>
//                                                 <p className='text-[15px] leading-[23px]'>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
//                                                 <p className='text-[15px] leading-[23px] pt-4'>$20</p>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div>
//                                 <div>
//                                     <div className='flex flex-col justify-center items-center '>
//                                         <img src={f1} className='h-32 hover:scale-110  ' alt="" srcset="" />
//                                         <div className='bg-slate-800 text-white font-Open p-5 rounded-b-3xl'>
//                                             <div className='space-y-3'>
//                                                 <p className='text-[20px] leading-[24px] font-bold'>Delicious Burger</p>
//                                                 <p className='text-[15px] leading-[23px]'>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
//                                                 <p className='text-[15px] leading-[23px] pt-4'>$20</p>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div>
//                                 <div>
//                                     <div className='flex flex-col justify-center items-center '>
//                                         <img src={f1} className='h-32 hover:scale-110  ' alt="" srcset="" />
//                                         <div className='bg-slate-800 text-white font-Open p-5 rounded-b-3xl'>
//                                             <div className='space-y-3'>
//                                                 <p className='text-[20px] leading-[24px] font-bold'>Delicious Burger</p>
//                                                 <p className='text-[15px] leading-[23px]'>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
//                                                 <p className='text-[15px] leading-[23px] pt-4'>$20</p>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div>
//                                 <div>
//                                     <div className='flex flex-col justify-center items-center '>
//                                         <img src={f1} className='h-32 hover:scale-110  ' alt="" srcset="" />
//                                         <div className='bg-slate-800 text-white font-Open p-5 rounded-b-3xl'>
//                                             <div className='space-y-3'>
//                                                 <p className='text-[20px] leading-[24px] font-bold'>Delicious Burger</p>
//                                                 <p className='text-[15px] leading-[23px]'>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
//                                                 <p className='text-[15px] leading-[23px] pt-4'>$20</p>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>


                           
//                         </div>
//                         <div className='flex flex-row justify-center items-center py-9 '>
//                                 <button className="bg-yellow-500 text-white px-7 py-2  rounded-full flex items-center gap-2 hover:bg-yellow-600">

//                                     View More
//                                 </button>
//                             </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default HeroSection


import React from "react";
import { ShoppingCart } from "lucide-react";

const foodItems = [
  { id: 1, name: "Delicious Pizza", price: 20, image: "f1.png" },
  { id: 2, name: "Delicious Burger", price: 15, image: "f2.png" },
  { id: 3, name: "Delicious Pizza", price: 17, image: "f3.png" },
  { id: 4, name: "Delicious Pasta", price: 18, image: "f4.png" },
  { id: 5, name: "French Fries", price: 10, image: "f5.png" },
  { id: 6, name: "Delicious Pizza", price: 15, image: "f6.png" },
  { id: 7, name: "Tasty Burger", price: 12, image: "f7.png" },
  { id: 8, name: "Tasty Burger", price: 14, image: "f8.png" },
  { id: 9, name: "Delicious Pasta", price: 10, image: "f9.png" },
];

const FoodGrid = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodItems.map((food) => (
          <div
            key={food.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <div className="flex justify-center bg-gray-100 p-5">
              <img
                src={`/images/${food.image}`}
                alt={food.name}
                className="w-28 h-28 object-contain"
              />
            </div>
            <div className="bg-gray-900 text-white p-5 relative">
              <h3 className="text-lg font-semibold">{food.name}</h3>
              <p className="text-sm text-gray-300">
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                velit, magnam voluptatem repellendus sed eaque.
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">${food.price}</span>
                <button className="bg-yellow-500 text-black p-2 rounded-full">
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGrid;


