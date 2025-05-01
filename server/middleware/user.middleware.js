import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const isLoggedIn = async (req, res, next)=>{
    
    try {        
        const token = req.cookies?.token;
        if(!token){
            return res.status(400).json({
                success:false,
                message:"Token not found!"
            })
        }

        const decode= jwt.verify(token, process.env.JWT_SECRET);
        if(!decode){
            return res.status(400).json({
                success:false,
                message:"Token not verified!"
            })
        } 

        req.user=decode;
        next();
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Token not verified!",
            error:error.message
        })
    }
}

const isAdmin = async (req, res, next)=>{
    try {
        if(req.user.role !== "admin"){
            return res.status(400).json({
                success:false,
                message:"You are not authorized!"
            })
        }
        next();
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"You are not authorized!",
            error:error.message
        })
    }
};

const isSeller = async (req, res, next)=>{
    try {
        if(req.user.role !== "seller"){
            return res.status(400).json({
                success:false,
                message:"You are not authorized!"
            })
        }
        next();
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"You are not authorized!",
            error:error.message
        })
    }
};

const isBuyer = async (req, res, next)=>{
    try {
        if(req.user.role !== "buyer"){
            return res.status(400).json({
                success:false,
                message:"You are not authorized!"
            })
        }
        next();
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"You are not authorized!",
            error:error.message
        })
    }
};

export {isLoggedIn, isAdmin, isSeller, isBuyer};