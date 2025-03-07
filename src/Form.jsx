import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
  minHeight: "400px",
};

const center = {
  lat: 40.712776, // Example: New York City Latitude
  lng: -74.005974, // Example: New York City Longitude
};

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    persons: "",
    date: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
  };

  return (
    <div className="2xl:container mx-auto">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
        
        {/* Left Side - Booking Form */}
        <div className="flex justify-center">
          <div className="w-md mx-auto p-10 border rounded-lg shadow-lg">
            <h2 className="font-semibold text-6xl mb-6 font-Dancing">Book A Table</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <select
                name="persons"
                value={formData.persons}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              >
                <option value="">How many persons?</option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
                <option value="5+">5+ Persons</option>
              </select>
              <DatePicker
                selected={formData.date}
                onChange={(date) => setFormData({ ...formData, date })}
                placeholderText="mm/dd/yyyy"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 text-white font-semibold py-2 rounded-md hover:bg-yellow-500 transition"
              >
                BOOK NOW
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Google Map with Error Handling */}
        <div className="flex justify-center">
          <div className="w-full h-[400px] border rounded-lg overflow-hidden shadow-lg">
            <LoadScript  
              googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
              onLoad={() => console.log("Google Maps Loaded Successfully")}
              onError={(e) => console.error("Google Maps Error:", e)}
            >
              <GoogleMap 
                mapContainerStyle={containerStyle} 
                center={center} 
                zoom={12} 
                onError={(e) => console.error("Map Load Error:", e)}
              >
                {/* You can add markers here */}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
