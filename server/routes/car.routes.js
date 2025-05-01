import express from "express";
import {
  addCar,
  deleteCar,
  getAllCars,
  getCarByBrand,
  getCarBycarType,
  getCarByFilter,
  getCarById,
  getCarByModel,
  getCarBySearch,
  getCarReviews,
  getCarsBySeller,
  reviewCar,
  updateCar
} from "../controller/car.controller.js";
import {
  isLoggedIn,
  isSeller,
  isAdmin,
  isBuyer
} from "../middleware/user.middleware.js";

const carRouter = express.Router();

carRouter.post("/create", isLoggedIn, isSeller, addCar);    
carRouter.get("/", getAllCars);
carRouter.get("/:id", getCarById);
carRouter.put("/:id", isLoggedIn, isSeller, updateCar); //update car logic is incomplete
carRouter.delete("/:id", isLoggedIn, isAdmin, deleteCar);
carRouter.get("/search", getCarBySearch);
carRouter.get("/search/type", getCarBycarType);
carRouter.get("/search/model", getCarByModel);
carRouter.get("/search/brand", getCarByBrand);
carRouter.get("/search/filter", getCarByFilter);
carRouter.get("/seller/:id",isLoggedIn, isSeller, getCarsBySeller);
carRouter.post("/:id/reviews", isLoggedIn, isBuyer, reviewCar);
carRouter.get("/:id/reviews", getCarReviews);

export default carRouter;
