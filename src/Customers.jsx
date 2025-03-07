import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Mike Hamell",
    role: "magna aliqua",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Moana Michell",
    role: "magna aliqua",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "John Doe",
    role: "magna aliqua",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="2xl:container mx-auto py-10">
      <div className="w-[80%] mx-auto">
        <p className="felx flex-row justify-center items-center text-center text-6xl font-Dancing py-9">What Says Our Customers</p>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-gray-900 text-white p-10 rounded-lg shadow-lg relative">
              <p className="text-lg mb-4">{testimonial.text}</p>
              <h3 className="font-bold text-xl">{testimonial.name}</h3>
              <p className="text-gray-400">{testimonial.role}</p>
            </div>
            <div className="flex justify-center mt-[-40px]">
              <div className="relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-4 border-yellow-400"
                />
                <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rotate-45"></div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      </div>
    </div>
  );
};

export default TestimonialCarousel;
