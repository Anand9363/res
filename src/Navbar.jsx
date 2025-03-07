import { hero } from "./Demoimages";
import car from "../src/assets/burger.jpg"

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import hero from "./path-to-your-image.jpg"; // Update with the correct path




const Navbar = () => {
    return (
        <>
            <nav className="container mx-auto bg-white shadow-md p-4 ">
                <div className="w-[90%] mx-auto  flex flex-row justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800  hover:cursor-pointer font-Dancing text-[32px] leading-[48px]">
                        Feane</h1>

                    <ul className="hidden md:flex space-x-6">
                        <li><a href="/" className="hover:text-yellow-600 font-Open">Home</a></li>
                        <li><a href="/about" className="hover:text-yellow-600 font-Open">About</a></li>
                        <li><a href="/menu" className="hover:text-yellow-600 font-Open">Menu</a></li>
                        <li><a href="/book-table" className="hover:text-yellow-600 font-Open">Book Table </a></li>
                    </ul>
                    <div className="flex flex-row gap-3 justify-center items-center">
     
 
 <a href="/">
 <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="2em"
      height="2em"
    
    >
      <circle cx="9" cy="8" r="2" fill="currentColor" opacity=".3"></circle>
      <path
        fill="currentColor"
        d="M9 15c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2"
        opacity=".3"
      ></path>
      <path
        fill="currentColor"
        d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 0 1 0 7.52c.42.14.86.24 1.33.24m-6 0c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2z"
      ></path>
    </svg>
 </a>
 

     
<a href="/">
<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="2em"
      height="2em"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <circle cx="8" cy="21" r="1"></circle>
        <circle cx="19" cy="21" r="1"></circle>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
      </g>
    </svg></a> 


                     <a href="/">
                     <svg className="hover:cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            width="1.5em"
                            height="1.5em"

                        >
                            <path
                                fill="currentColor"
                                d="m15.504 13.616l-3.79-3.223c-.392-.353-.811-.514-1.149-.499a6 6 0 1 0-.672.672c-.016.338.146.757.499 1.149l3.223 3.79c.552.613 1.453.665 2.003.115s.498-1.452-.115-2.003zM6 10a4 4 0 1 1 0-8a4 4 0 0 1 0 8"
                            ></path>
                        </svg>
</a>

                        <button className="bg-yellow-500 text-white px-4 py-2  rounded-full flex items-center gap-2 hover:bg-yellow-600">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 6H18M6 12H18M6 18H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Order Online
                        </button>

                    </div>


                </div>

            </nav>
           
            {/* <img src={hero} alt="" srcset=""  height={"100vh"} /> */}
            <div
className="h-screen bg-cover bg-center flex items-start pt-36 pl-24 justify-start text-white"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="w-full max-w-4xl  ">
      <div>
            <h1 className="text-6xl font-bold text-left font-Dancing" >Fast Food Restaurant</h1>
            <p className="mt-4 text-lg text-left">
 Enjoy the taste of freshly made burgers with high-quality ingredients.
            </p>
          <a href="/">  <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full mr-72">
              Order Now
            </button></a>
          </div>
        {/* <Carousel 
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          interval={3000}
          showArrows={false}
          showIndicators={true}
        >
          <div>
            <h1 className="text-6xl font-bold text-left font-Dancing" >Fast Food Restaurant</h1>
            <p className="mt-4 text-lg text-left">
 Enjoy the taste of freshly made burgers with high-quality ingredients.
            </p>
            <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full mr-72">
              Order Now
            </button>
          </div>
          <div className="mt-32">
            <h1 className="text-6xl font-bold text-left  font-Dancing">Delicious Burgers</h1>
            <p className="mt-4 text-lg text-left ">
              Enjoy the taste of freshly made burgers with high-quality ingredients.
            </p>
            {/* <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full">
              Order Now
            </button> */}
          {/* </div>
          <div>
            <h1 className="text-6xl font-bold text-left  font-Dancing">Crispy French Fries</h1>
            <p className="mt-4 text-lg text-left ">
              Our crispy golden fries are the perfect side for your meal.
            </p>
            <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full mr-72">
              Order Now
            </button>
          </div>
        </Carousel> */}
      </div>
    </div>
            <div className="2xl:container mx-auto py-5">
                <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 p-12">
                    <div className=" grid grid-cols-1 md:grid-cols-2  justify-start items-center text-start bg-slate-800 p-7 rounded-xl" >
                        <div>
                            <img src={car} className="rounded-full h-32  hover:scale-110" alt="" />
                        </div>
                        <div className="text-white space-y-2 font-Dancing text-[24px] leading-[29px]">
                            <h2>Tasty Thursdays</h2>
                            <h1>20% Off</h1>
                            <button className="bg-yellow-500 text-white px-7 py-2  rounded-full flex items-center gap-2 hover:bg-yellow-600 text-[16px] leading-[24px]">
                                Order Now <svg className="hover:cursor-pointer"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 14 14"
                                    width="1.5em"
                                    height="1.5em"

                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12.88 12.39a1 1 0 0 1-.25.78a1 1 0 0 1-.75.33H2.12a1 1 0 0 1-.75-.33a1 1 0 0 1-.25-.78L2 4.5h10ZM4.5 4.5V3a2.5 2.5 0 0 1 5 0v1.5"
                                    ></path>
                                </svg>
                            </button>
                        </div>


                    </div>




                    <div className=" grid grid-cols-1 md:grid-cols-2  justify-start items-center text-start bg-slate-800 p-7 rounded-xl" >
                        <div>
                            <img src={car} className="rounded-full h-32  hover:scale-110" alt="" />
                        </div>
                        <div className="text-white space-y-2 text-[24px] leading-[29px] font-Dancing">
                            <h2>Pizza Days
                            </h2>
                            <h1>   15% Off</h1>

                            <button className="bg-yellow-500 text-white px-7 py-2  rounded-full flex items-center gap-2 hover:bg-yellow-600  text-[16px] leading-[24px]">

                                Order Now <svg className="hover:cursor-pointer"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 14 14"
                                    width="1.5em"
                                    height="1.5em"

                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12.88 12.39a1 1 0 0 1-.25.78a1 1 0 0 1-.75.33H2.12a1 1 0 0 1-.75-.33a1 1 0 0 1-.25-.78L2 4.5h10ZM4.5 4.5V3a2.5 2.5 0 0 1 5 0v1.5"
                                    ></path>
                                </svg>
                            </button>




                        </div>


                    </div>

                </div>
            </div>


        </>


    );

}

export default Navbar


// import React from "react";
// import { hero } from "./Demoimages";

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center p-6 bg-black text-white">
//       <h1 className="text-2xl font-semibold italic">Feane</h1>
//       <ul className="hidden md:flex space-x-8 text-lg">
//         <li className="text-yellow-400 cursor-pointer">HOME</li>
//         <li className="cursor-pointer">MENU</li>
//         <li className="cursor-pointer">ABOUT</li>
//         <li className="cursor-pointer">BOOK TABLE</li>
//       </ul>
//       <div className="flex items-center space-x-4">
//         <span className="cursor-pointer">👤</span>
//         <span className="cursor-pointer">🛒</span>
//         <span className="cursor-pointer">🔍</span>
//         <button className="bg-yellow-400 px-4 py-2 rounded-full text-black font-bold">
//           Order Online
//         </button>
//       </div>
//     </nav>
//   );
// };

// const Hero = () => {
//   return (
//     <section className="flex flex-col md:flex-row items-center bg-black text-white px-10 py-16">
//       <div className="md:w-1/2 space-y-5">
//         <h2 className="text-5xl font-semibold italic">Fast Food Restaurant</h2>
//         <p className="text-gray-300">
//           Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente
//           ad mollitia laborum quam quisquam esse error unde. Tempora ex
//           doloreque, labore, sunt repellat dolore, iste magni quos nihil ducimus
//           libero ipsam.
//         </p>
//         <button className="bg-yellow-400 px-6 py-3 rounded-full text-black font-bold text-lg">
//           Order Now
//         </button>
//       </div>
//       <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
//         <img
//           src={hero} // ✅ Ensure this image exists in /public/images/
//           alt="Burger and Fries"
//           className="w-full max-w-lg rounded-lg shadow-lg"
//         />
        
//       </div>
//     </section>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//     </div>
//   );
// };

// export default App;

