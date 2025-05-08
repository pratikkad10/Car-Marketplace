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
import upload from "../utils/upload.js";
import Image from "../models/image.model.js";

const carRouter = express.Router();

carRouter.post("/create", isLoggedIn, isSeller, addCar);
carRouter.get("/", getAllCars);
carRouter.get("/:id", isLoggedIn, getCarById);
carRouter.put("/:id", isLoggedIn, isSeller, updateCar); //update car logic is incomplete
carRouter.delete("/:id", isLoggedIn, isAdmin, deleteCar);
carRouter.get("/search", isLoggedIn, getCarBySearch);
carRouter.get("/search/type", isLoggedIn, getCarBycarType);
carRouter.get("/search/model", isLoggedIn, getCarByModel);
carRouter.get("/search/brand", isLoggedIn, getCarByBrand);
carRouter.get("/search/filter", getCarByFilter);
carRouter.get("/seller/:id", isLoggedIn, isSeller, getCarsBySeller);
// carRouter.post("/:id/reviews", isLoggedIn, isBuyer, reviewCar);
// carRouter.get("/:id/reviews", getCarReviews);
carRouter.get("/reviews", isLoggedIn, getCarReviews); //get all reviews of all cars

carRouter.post(
  "/image/upload",
  isLoggedIn,
  isSeller,
  upload.single("image"),
  async (req, res) => {
    try {
      const file = req.file;
      const {path, filename} = req.file;
      if (!file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const image=await Image({path, filename});
      await image.save();


      res.status(200).json({
        message: "File uploaded successfully",
        filePath: `/uploads/${file.filename}`
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error uploading file",
        error: error.message
      });
    }
  }
);

export default carRouter;
