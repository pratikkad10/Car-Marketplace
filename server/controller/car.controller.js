import Car from "../models/car.model";

const addCar = async (req, res) => {
    const {name, brand, model, year, carType, price, color, 
        mileage, fuelType, transmission,image, description, 
        location,seller,sellerContact, status, features} = req.body;
    try {
        if (!name || !brand || !model || !year || !carType || !price || 
            !color || !mileage || !fuelType || !transmission || !image ||
            !description || !location || !seller || !sellerContact 
            || !status || !features) { 
            return res.status(400).json({
                message: "All fields are required!"
            });
        }

        const car = await Car.create({
            name, brand, model, year, carType, price, color, mileage, fuelType,
            transmission,image, description, location,seller, status, sellerContact, features
        });

        if (!car) {
            return res.status(400).json({
                message: "Car not added!"
            });
        }

        res.status(201).json({
            message: "Car added successfully",
            success: true,
            car
        });
        
    } catch (error) {
        res.status(400).json({
        message: "Car not added",
        error: error.message,
        success: false
        });
    }
};

const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find({}).populate("seller", "name email").sort({ createdAt: -1 });
        if (!cars) {
            return res.status(400).json({
                message: "No cars found!"
            });
        }
        res.status(200).json({
            message: "Cars fetched successfully",
            success: true,
            cars
        });
    } catch (error) {
        res.status(400).json({
            message: "Cars not fetched",
            error: error.message,
            success: false
        });
    }
};

const getCarById = async (req, res) => {
    const { id } = req.params;
    try {
        const car = await Car.findById(id).populate("seller", "name email").sort({ createdAt: -1 });
        if (!car) {
            return res.status(400).json({
                message: "Car not found!"
            });
        }
        res.status(200).json({
            message: "Car fetched successfully",
            success: true,
            car
        });
    } catch (error) {
        res.status(400).json({
            message: "Car not fetched",
            error: error.message,
            success: false
        });
    }
};

const updateCar = async (req, res) => {
    const { id } = req.params;
    try {
        const car = await Car.findByIdAndUpdate(id, req.body, {             
            new: true,
            runValidators: true
        }).populate("seller", "name email").sort({ createdAt: -1 });
        if (!car) {
            return res.status(400).json({
                message: "Car not found!"
            });
        }
        res.status(200).json({
            message: "Car updated successfully",
            success: true,
            car
        });
    } catch (error) {
        res.status(400).json({
            message: "Car not updated",
            error: error.message,
            success: false
        });
    }
}          

const deleteCar = async (req, res) => {
    const { id } = req.params;
    try {
        const car = await Car.findByIdAndDelete(id);
        if (!car) {
            return res.status(400).json({
                message: "Car not found!"
            });
        }
        res.status(200).json({
            message: "Car deleted successfully",
            success: true,
            car
        });
    } catch (error) {
        res.status(400).json({
            message: "Car not deleted",
            error: error.message,
            success: false
        });
    }
}

const getCarsBySeller = async (req, res) => {
    const { id } = req.params;
    try {
        const cars = await Car.find({ seller: id }).populate("seller", "name email").sort({ createdAt: -1 });
        if (!cars) {
            return res.status(400).json({
                message: "No cars found!"
            });
        }
        res.status(200).json({
            message: "Cars fetched successfully",
            success: true,
            cars
        });
    } catch (error) {
        res.status(400).json({
            message: "Cars not fetched",
            error: error.message,
            success: false
        });
    }
};


const getCarBycarType = async (req, res) => {
    const { carType } = req.body;
    try {
        const cars = await Car.find({ carType }).populate("seller", "name email").sort({ createdAt: -1 });
        if (!cars) {
            return res.status(400).json({
                message: "No cars found!"
            });
        }
        res.status(200).json({
            message: "Cars fetched successfully",
            success: true,
            cars
        });
    } catch (error) {
        res.status(400).json({
            message: "Cars not fetched",
            error: error.message,
            success: false
        });
    }
};

const getCarByBrand = async (req, res) => {
    const { brand } = req.body;
    try {
        const cars = await Car.find({ brand }).populate("seller", "name email").sort({ createdAt: -1 });
        if (!cars) {
            return res.status(400).json({
                message: "No cars found!"
            });
        }
        res.status(200).json({
            message: "Cars fetched successfully",
            success: true,
            cars
        });
    } catch (error) {
        res.status(400).json({
            message: "Cars not fetched",
            error: error.message,
            success: false
        });
    }
};

const getCarByModel = async (req, res) => {
    const { model } = req.body;
    try {
        const cars = await Car.find({ model }).populate("seller", "name email").sort({ createdAt: -1 });
        if (!cars) {
            return res.status(400).json({
                message: "No cars found!"
            });
        }
        res.status(200).json({
            message: "Cars fetched successfully",
            success: true,
            cars
        });
    } catch (error) {
        res.status(400).json({
            message: "Cars not fetched",
            error: error.message,
            success: false
        });
    }
};

const getCarByFilter = async (req, res) => {
    const {carType, fuelType, priceRange, brand, model} = req.body;     //priceRange is an array of two values [min, max]
    if (!carType || !fuelType || !priceRange || !brand || !model) {
        return res.status(400).json({
            message: "All fields are required!"
        });
    }

    if (priceRange.length !== 2) {
        return res.status(400).json({
            message: "Price range should be an array of two values!"
        });
    }
    try {
        const cars = await Car.find({
            fuelType: fuelType.length > 0 || !fuelType.includes("All") ? { $in: fuelType } : { $exists: true },
            price: { $gte: priceRange[0], $lte: priceRange[1] }, // priceRange is an array of two values [min, max]
            brand: brand.length > 0 || !brand.includes("All") ? { $in: brand } : { $exists: true },
            model: model.length > 0 || !model.includes("All") ? { $in: model } : { $exists: true },
            carType: carType.length > 0 || !carType.includes("All") ? { $in: carType } : { $exists: true }
        }).populate("seller", "name email").sort({ createdAt: -1 });
        if (!cars) {
            return res.status(400).json({
                message: "No cars found!"
            });
        }
        res.status(200).json({
            message: "Cars fetched successfully",
            success: true,
            cars
        });
    } catch (error) {
        res.status(400).json({
            message: "Cars not fetched",
            error: error.message,
            success: false
        });
    }
};

const getCarBySearch = async (req, res) => {
    const { search } = req.body;
    
    try {
        if (!search) {
            return res.status(400).json({
                message: "Search term is required!"
            });
        }
        const searchCondition = search ? {
            $or: [
                { name: { $regex: search, $options: "i" } },
                { model: { $regex: search, $options: "i" } },
                { brand: { $regex: search, $options: "i" } },
                { fuelType: { $regex: search, $options: "i" } },
                { carType: { $regex: search, $options: "i" } }
            ]
        } : {}; 

        const cars = await Car.find(searchCondition)
            .populate("seller", "name email")
            .sort({ createdAt: -1 });

        if (cars.length === 0) {
            return res.status(404).json({
                message: "No cars found matching your search!",
                success: false
            });
        }

        res.status(200).json({
            message: "Cars fetched successfully",
            success: true,
            count: cars.length,
            cars
        });

    } catch (error) {
        res.status(500).json({
            message: "Error searching for cars",
            error: error.message,
            success: false
        });
    }
};

const reviewCar = async (req, res) => {
    const { id } = req.params;
    const { user, rating, comment } = req.body;
    try {
        if (!user || !rating || !comment) {
            return res.status(400).json({
                message: "All fields are required!"
            });
        }
        const car = await Car.findById(id);
        if (!car) {
            return res.status(400).json({
                message: "Car not found!"
            });
        }
        const review = {
            user,
            rating,
            comment
        };
        car.reviews.push(review);
        car.averageRating = (car.averageRating + rating) / car.reviews.length;
        await car.save();
        res.status(200).json({
            message: "Car reviewed successfully",
            success: true,
            car
        });
    } catch (error) {
        res.status(400).json({
            message: "Car not reviewed",
            error: error.message,
            success: false
        });
    }
}

const getCarReviews = async (req, res) => {
    const { id } = req.params;
    try {
        const car = await Car.findById(id).populate("reviews.user", "name email").sort({ createdAt: -1 });
        if (!car) {
            return res.status(400).json({
                message: "Car not found!"
            });
        }
        res.status(200).json({
            message: "Car reviews fetched successfully",
            success: true,
            reviews: car.reviews
        });
    } catch (error) {
        res.status(400).json({
            message: "Car reviews not fetched",
            error: error.message,
            success: false
        });
    }
};


