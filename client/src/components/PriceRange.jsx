import React, { useState } from "react";

const PriceRange = ({ onPriceChange }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinChange = (e) => {
    const value = e.target.value;
    setMinPrice(value);
    onPriceChange && onPriceChange({ minPrice: value, maxPrice });
  };

  const handleMaxChange = (e) => {
    const value = e.target.value;
    setMaxPrice(value);
    onPriceChange && onPriceChange({ minPrice, maxPrice: value });
  };

  return (
    <div className="price-range">
      {/* <label className="price-label">Price Range</label> */}
      <div className="input-container flex gap-2">
        <div className="input-wrapper">
          <input
            type="number"
            placeholder="₹ Min"
            className="min-input border rounded px-2 w-30"
            value={minPrice}
            onChange={handleMinChange}
          />
        </div>
        <span className="separator">-</span>
        <div className="input-wrapper">
          <input
            type="number"
            placeholder="₹ Max"
            className="max-input border rounded px-2 w-30"
            value={maxPrice}
            onChange={handleMaxChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
