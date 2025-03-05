import { hero } from "./Demoimages";
import car from "../src/assets/burger.jpg"





const Navbar = () => {
    return (
        <>
            <nav className="bg-white shadow-md p-4 ">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800  hover:cursor-pointer font-Dancing text-[32px] leading-[48px]">
                        Feane</h1>

                    <ul className="hidden md:flex space-x-6">
                        <li><a href="/" className="hover:text-yellow-600 font-Open">Home</a></li>
                        <li><a href="/about" className="hover:text-yellow-600 font-Open">About</a></li>
                        <li><a href="/menu" className="hover:text-yellow-600 font-Open">Menu</a></li>
                        <li><a href="/book-table" className="hover:text-yellow-600 font-Open">Book Table </a></li>
                    </ul>
                    <div className="flex flex-row gap-3 justify-center items-center">

                        <svg className="hover:cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="2em"
                            height="2em"

                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 9.5v-2a3 3 0 1 1 6 0v2a3 3 0 0 1-1.5 2.599v1.224a1 1 0 0 0 .629.928l2.05.82A3.69 3.69 0 0 1 18.5 18.5h-13c0-1.51.92-2.868 2.321-3.428l2.05-.82a1 1 0 0 0 .629-.929v-1.224A3 3 0 0 1 9 9.5"
                            ></path>
                        </svg>


                        <svg className="hover:cursor-pointer"
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


                        <button className="bg-yellow-500 text-white px-4 py-2  rounded-full flex items-center gap-2 hover:bg-yellow-600">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 6H18M6 12H18M6 18H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Order Online
                        </button>

                    </div>


                </div>

            </nav>
            <img src={hero} alt="" srcset="" />


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
