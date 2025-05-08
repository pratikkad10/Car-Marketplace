import React, { createContext, useContext, useState } from 'react';
import { createCar, getAllCars, getByFilter, getReviews, loginUser, logoutUser } from '../services/getServices';
import { useNavigate } from 'react-router-dom';

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
    const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  const fetchCars = async () => {
    try {
        setLoading(true);
        const response = await getAllCars();
        if (response.status === 200) {
          const data = response.data;
          setCars(data.cars);
          setLoading(false);
        } else {
          console.error("Failed to fetch cars:", response.statusText);
        }
        
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  }

  const login =async (data) => {
    const response = await loginUser(data);
    if (response.status === 200) {
        const data = response.data;
      setIsLoggedIn(true);
      navigate("/");
    } else {
      console.error("Login failed:", response.statusText);
    }

  };

    const logout =async () => {
        const response = await logoutUser();
        if (response.status === 200) {
            const data = response.data;
          console.log("Logout successful:", data);
          setIsLoggedIn(false);
          navigate("/user/login");
        } else {
          console.error("Logout failed:", response.statusText);
        }
      
    };

    const filterCars =async (filter) => {
        setLoading(true);
        const response = await getByFilter(filter);
        if (response.status === 200) {
            const data = response.data;
          console.log("Cars filtered successfully:", data.cars);
          setCars(data.cars);
          setLoading(false);
        } else {
          console.error("Failed to filter cars:", response.statusText);
        }
    }

    const getreviews = async ()=>{
        const response = await getReviews();
        if (response.status === 200) {
            const data = response.data;
          console.log("Reviews fetched successfully:", data.reviews);
          setReviews(data.reviews);
        } else {
          console.error("Failed to fetch reviews:", response.statusText);
        }
    }

    const carListing = async (formData)=>{
      try {
        const response = await createCar(formData);
        if (response.status === 200) {
          const data = response.data;
          console.log("Car listed successfully:", data.car);
          setCars((prevCars) => [...prevCars, data.car]);
          navigate("/");
        } else {
          console.error("Failed to list car:", response.statusText);
        }
      } catch (error) {
        console.error("Error listing car:", error);
      }
        
    }
  
  return (
    <AppContext.Provider
      value={{
        
        cars,
        setCars,
        fetchCars,
        login,
        isLoggedIn,
        setIsLoggedIn,
        logout,
        filterCars,
        loading,
        setLoading,
        carListing
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

