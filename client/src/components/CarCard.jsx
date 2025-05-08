import React from 'react';
import Button from './Button';

const CarCard = ({
  image,
  name,
  price,
  fuelType,
  transmission,
  className = '',
}) => {
  return (
    <div
      className={`max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4 ${className}`}
    >
      {/* Image Section */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg"
      />

      {/* Content Section */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-xl font-bold text-customBlue-700 mt-2">
          ₹{price.toLocaleString()}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-600 mt-4">
          <p>
            <strong>Fuel:</strong> {fuelType}
          </p>
          <p>
            <strong>Transmission:</strong> {transmission}
          </p>
        </div>
      </div>

     <Button
     variant='secondary'
     className={"w-full mt-2"}
     >View Details</Button>
    </div>
  );
};

export default CarCard;



//card component usecase

// const cars = [
//   {
//     image: 'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     name: 'Toyota Corolla',
//     price: 25000,
//     fuelType: 'Petrol',
//     transmission: 'Automatic',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     name: 'Tesla Model 3',
//     price: 45000,
//     fuelType: 'Electric',
//     transmission: 'Automatic',
//   },
// ];

// return (
//   <div className="flex gap-2 flex-wrap justify-center items-center p-4">
//     {cars.map((car, index) => (
//       <CarCard
//         key={index}
//         image={car.image}
//         name={car.name}
//         price={car.price}
//         fuelType={car.fuelType}
//         transmission={car.transmission}
//       />
//     ))}
//   </div>
// );