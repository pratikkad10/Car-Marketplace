import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: {
    type: Number,
    required: true,
    min: 1886,
    max: new Date().getFullYear() + 1
  }, // Allow next year's models
  carType: {
    type: String,
    enum: ["SUV", "Sedan", "Sports", "Luxury", "Electric"],
    required: true
  },
  price: { type: Number, required: true, min: 0 },
  color: { type: String, required: true },
  mileage: { type: Number, required: true, min: 0 },
  fuelType: {
    type: String,
    enum: ["Petrol", "Diesel", "Electric", "Hybrid"],
    required: true
  },
  transmission: {
    type: String,
    enum: ["Automatic", "Manual", "CVT", "Semi-Automatic"],
    required: true
  },
  image: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  sellerContact: { type: Number, required: true },
  status: {
    type: String,
    enum: ["available", "removed", "sold"],
    default: "available"
  },
  features: [{ type: String, required: true }],
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  reviews: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
      createdAt: { type: Date, default: Date.now }
    }
  ],
  averageRating: { type: Number, default: 0 }
});

const Car = mongoose.model("Car", carSchema);

export default Car;
