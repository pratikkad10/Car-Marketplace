import React from 'react';

// Sample reviews data
const reviews = [
  {
    id: 1,
    rating: 5,
    text: "Selling my car was quick and easy!",
    initials: "JD",
    name: "John Doe",
    title: "Car Seller"
  },
  {
    id: 2,
    rating: 4,
    text: "Great experience buying my dream car.",
    initials: "AS",
    name: "Alice Smith",
    title: "Car Buyer"
  },
  {
    id: 3,
    rating: 5,
    text: "Excellent service from start to finish.",
    initials: "RJ",
    name: "Robert Johnson",
    title: "Happy Customer"
  }
];

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4 max-w-md mx-auto">
      {/* Stars */}
      <div className="text-yellow-500 mb-2">
        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
      </div>
      
      {/* Review text */}
      <p className="text-gray-700 mb-3 italic">"{review.text}"</p>
      
      {/* Author info */}
      <div className="flex items-center">
        <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center mr-2">
          {review.initials}
        </div>
        <div>
          <p className="font-medium">{review.name}</p>
          <p className="text-sm text-gray-500">{review.title}</p>
        </div>
      </div>
    </div>
  );
};

const ReviewsList = () => {
  return (
    <div className='flex gap-4'>
      {reviews.map(review => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewsList;