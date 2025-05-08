import React, { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import PriceRange from "../components/PriceRange";
import CarCard from "../components/CarCard";
import ReviewCard from "../components/ReviewCard";
import SellCar from "../components/SellCar";
import { AppContext } from "../context/AppContext";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { fetchCars, cars, filterCars, setCars } = useContext(AppContext);

  useEffect(() => {
    fetchCars();
  }, []);

  // const cars = [
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Toyota Corolla",
  //     price: 25000,
  //     fuelType: "Petrol",
  //     transmission: "Automatic"
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Tesla Model 3",
  //     price: 45000,
  //     fuelType: "Electric",
  //     transmission: "Automatic"
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Tesla Model 3",
  //     price: 45000,
  //     fuelType: "Electric",
  //     transmission: "Automatic"
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Tesla Model 3",
  //     price: 45000,
  //     fuelType: "Electric",
  //     transmission: "Automatic"
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Tesla Model 3",
  //     price: 45000,
  //     fuelType: "Electric",
  //     transmission: "Automatic"
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Tesla Model 3",
  //     price: 45000,
  //     fuelType: "Electric",
  //     transmission: "Automatic"
  //   }
  // ];

  const carTypeOptions = ["SUV", "Sedan", "Sports", "Luxury", "Electric"];
  const fuelTypeOptions = ["Petrol", "Diesel", "Electric", "Hybrid"];
  const transmissionOptions = ["Automatic", "Manual", "CVT", "Semi-Automatic"];

  const [filters, setFilters] = useState({
    carType: "All",
    fuelType: "All",
    transmission: "All"
  });

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value
    }));
  };

  return (
    <div>
      <div className="top">
        <div className=" w-[100%] h-80 flex flex-col items-end justify-center bg-black text-zinc-50 mt-4  pr-[1rem] gap-[1rem] bg-[url('https://images.unsplash.com/photo-1584936684506-c3a7086e8212?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
          <p className="text-[48px] font-semibold">Find Your Perfect Drive</p>
          <p className="text-wrap w-120 pr-4 text-[#d6d6d6] text-[18px]">
            Discover the easiest way to buy and sell cars online. Browse
            thousands of vehicles or list yours in minutes.
          </p>
          <div className="flex gap-4">
            <Button variant="primary">Browse Cars</Button>
            <Button variant="secondary">
              <NavLink to="/cars/sell">Sell Your Car</NavLink>{" "}
            </Button>
          </div>
        </div>

        <div className="px-4 py-8 ">
          <p className="font-bold text-2xl">Find Your Next Vehicle</p>
          <form
            className="flex gap-4 flex-wrap justify-center bg-gray-100 min-h-60 rounded-3xl py-4"
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission behavior
              // filterCars(filters); // Apply the filter logic
              console.log(filters);
              
            }}
          >
            <div>
              <label htmlFor="carType" className="block font-medium mb-1">
                Car Type
              </label>
              <Dropdown
                id="carType"
                options={carTypeOptions}
                onSelect={(option) => handleFilterChange("carType", option)}
              />
            </div>

            <div>
              <label htmlFor="fuelType" className="block font-medium mb-1">
                Fuel Type
              </label>
              <Dropdown
                id="fuelType"
                options={fuelTypeOptions}
                onSelect={(option) => handleFilterChange("fuelType", option)}
              />
            </div>

            {/* Uncomment if Price Range is required in the future */}
            {/* 
  <div>
    <label htmlFor="priceRange" className="block font-medium mb-1">Price Range</label>
    <PriceRange id="priceRange" onPriceChange={handlePriceChange} />
  </div>
  */}

            <div>
              <label htmlFor="transmission" className="block font-medium mb-1">
                Transmission
              </label>
              <Dropdown
                id="transmission"
                options={transmissionOptions}
                onSelect={(option) =>
                  handleFilterChange("transmission", option)
                }
              />
            </div>

            <button
              type="submit"
              className="h-10 mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Apply Filter
            </button>
          </form>
        </div>
      </div>

      <div className="features vehicles ">
        <p className="font-bold text-2xl px-4">Featured Vehicles</p>
        <div className="flex gap-6 flex-wrap justify-center items-center py-4">
          {cars.map((car, index) => (
            <CarCard
              key={index}
              image={car.image}
              name={car.name}
              price={car.price}
              fuelType={car.fuelType}
              transmission={car.transmission}
            />
          ))}
        </div>
      </div>
      <div className="main2">
        <SellCar />
      </div>
      <div className="bottom flex flex-col items-center py-4 justify-center">
        <p className="font-bold text-2xl">What Our Customers Say</p>
        <p className="text-wrap text-center mt-4 w-150 text-[#374151] text-[18px]">
          Thousands of satisfied customers have found their perfect vehicles
          through our platform.
        </p>
        <div className="py-12 flex flex-row gap-2 px-4">
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
