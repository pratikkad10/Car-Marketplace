import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const CarGallery = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const mockCars = [
          {
            _id: '1',
            name: 'BMW 5 Series',
            brand: 'BMW',
            model: '5 Series',
            year: 2023,
            carType: 'Sedan',
            price: 4890000,
            color: 'Black',
            mileage: 0,
            fuelType: 'Petrol',
            transmission: 'Automatic',
            engine: '3.0L Turbo',
            image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            thumbnails: [
              'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
              'https://images.unsplash.com/photo-1618843479313-40f8afb4f5d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
              'https://images.unsplash.com/photo-1612821745274-1b0e6e8a8250?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            ],
            description: 'Experience luxury and performance with this 2023 BMW 5 Series. This executive sedan combines elegant design with cutting-edge technology, offering an unrivaled driving experience. The car comes with the powerful, yet efficient, petrol engine, delivering impressive power and control, while the Harman Kardon sound system provides audio excellence.',
            location: 'BMW Excellence Network, Vithal Main Road, SG',
            features: [
              'LED Headlights with Adaptive Screen',
              '12.3" Digital Instrument Cluster',
              'Leather Interior with Heated Seats',
              'Harman Kardon Sound System',
              'Parking Assistant Plus',
              'BMW Live Cockpit Professional'
            ],
            status: 'available'
          },
        ];
        setCars(mockCars);
        setSelectedCar(mockCars[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cars:', error);
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="animate-pulse bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
          <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="aspect-video bg-gray-300 rounded-lg"></div>
            <div className="space-y-4">
              <div className="h-6 bg-gray-300 rounded w-full"></div>
              <div className="h-6 bg-gray-300 rounded w-2/3"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-300 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!selectedCar) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-gray-100">
        {cars.map((car) => (
          <div 
            key={car._id} 
            onClick={() => setSelectedCar(car)}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
          >
            <img 
              src={car.image} 
              alt={`${car.brand} ${car.model}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{car.brand} ${car.model}</h3>
              <p className="text-gray-600">{car.year} • {car.mileage} mi</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-5xl mx-auto">
        {/* Header */}
        <div className="p-4">
          <h1 className="text-xl font-bold">{selectedCar.brand} {selectedCar.model}</h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
          {/* Left Section: Images */}
          <div>
            <div className="mb-3">
              <img 
                src={selectedCar.image} 
                alt={`${selectedCar.brand} ${selectedCar.model}`}
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="flex space-x-2">
              {selectedCar?.thumbnails?.map((thumbnail, index) => (
                <img 
                  key={index}
                  src={thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 object-cover rounded-lg border border-gray-300"
                />
              )) || null}
            </div>
          </div>

          {/* Right Section: Details */}
          <div>
            {/* Price and Action Buttons */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold">₹ {selectedCar.price.toLocaleString()}</span>
              <div className="flex items-center space-x-2">
                <button className="text-gray-600 hover:text-gray-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                  </svg>
                </button>
                <Button  className="bg-blue-600 cursor-pointer text-white py-1.5 px-3 rounded-lg hover:bg-blue-700 text-sm">
                  Contact Seller
                </Button>
              </div>
            </div>

            {/* Specifications */}
            <div className="mb-4">
              <h2 className="text-base font-semibold mb-2">Specifications</h2>
              <div className="grid grid-cols-2 gap-3 bg-gray-50 p-3 rounded-lg">
                <div>
                  <p className="text-gray-600 text-xs">Brand</p>
                  <p className="font-medium text-sm">{selectedCar.brand}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs">Model</p>
                  <p className="font-medium text-sm">{selectedCar.model}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs">Year</p>
                  <p className="font-medium text-sm">{selectedCar.year}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs">Mileage</p>
                  <p className="font-medium text-sm">{selectedCar.mileage} mi</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs">Fuel Type</p>
                  <p className="font-medium text-sm">{selectedCar.fuelType}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs">Transmission</p>
                  <p className="font-medium text-sm">{selectedCar.transmission}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs">Engine</p>
                  <p className="font-medium text-sm">{selectedCar.engine}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs">Color</p>
                  <p className="font-medium text-sm">{selectedCar.color}</p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-4">
              <h2 className="text-base font-semibold mb-2">Key Features</h2>
              <ul className="bg-gray-50 p-3 rounded-lg">
                {selectedCar.features.map((feature, index) => (
                  <li key={index} className="flex items-start mb-1">
                    <span className="text-blue-500 mr-2 text-xs">✓</span>
                    <span className="text-xs">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="px-4 pb-4">
          <h2 className="text-base font-semibold mb-2">{selectedCar.brand} {selectedCar.model}</h2>
          <p className="text-gray-700 text-xs">{selectedCar.description}</p>
        </div>

        {/* Location */}
        <div className="px-4 pb-4">
          <h3 className="text-base font-semibold mb-2">Location</h3>
          <p className="text-gray-700 text-xs mb-3">{selectedCar.location}</p>
          {/* <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-xs">[Map Placeholder]</span>
          </div> */}
        </div>

        {/* Seller Information */}
        <div className="px-4 pb-4">
          <h3 className="text-base font-semibold mb-2">Seller Information</h3>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
              <div>
                <p className="font-medium text-sm">BMW Excellence Network</p>
                <p className="text-gray-600 text-xs">+65 4057 8050</p>
              </div>
            </div>
            {/* <Link
              className="w-full bg-green-600 text-white py-1.5 rounded-lg hover:bg-green-700 text-sm text-center block"
            >
              Buy Car
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarGallery;