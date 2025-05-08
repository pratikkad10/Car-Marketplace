import React, { use } from 'react';
import { FaRegListAlt, FaRegHandshake, FaRegCheckCircle } from 'react-icons/fa'; // Importing icons
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const SellCar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sell Your Car With Confidence
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            List your vehicle in minutes and reach thousands of verified buyers.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-10">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center flex-1">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <FaRegListAlt className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Create a Listing</h3>
                <p className="text-[#374151] text-[18px] text-center">
                  Add photos and details about your car in our easy-to-use form.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center flex-1">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <FaRegHandshake className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Connect with Buyers</h3>
                <p className="text-[#374151] text-[18px] text-center">
                  Receive inquiries from interested buyers through our secure messaging system.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center flex-1">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <FaRegCheckCircle className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Complete the Sale</h3>
                <p className="text-[#374151] text-[18px] text-center">
                  Finalize the deal with our guided process for a smooth transaction.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Button onClick={()=>navigate('/cars/sell')} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Start Selling Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellCar;
