import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

//auth routes and user routes
export const loginUser = (formData) => {
  return api.post('/users/login', formData);
};  

export const signupUser = (formData) => {
  return api.post('/users/register', formData);
};

export const getCars = () => {
  return api.get('/');
};

export const getMe = (id) => {
  return api.get(`/users/me`);
}

export const logoutUser = () => {
  return api.get('/users/logout');
};

export const requestResetPassword = (formData) => {
  return api.post('/users/forgotPassword', formData);
};

export const resetPassword = (formData, token) => {
  return api.post(`/users/reset-password/${token}`, formData);
};

export const verifyUser = (token) => {
  return api.get(`/users/verify/${token}`);
};



//car routes
export const getCar = (id) => {
  return api.get(`/cars/${id}`);
};

export const createCar = (formData) => {
  return api.post('/cars/create', formData);  //selling a car
};

export const updateCar = (id, formData) => {
  return api.put(`/cars/${id}`, formData);
};

export const deleteCar = (id) => {
  return api.delete(`/cars/${id}`);
};

export const getAllCars = () => {
  return api.get(`/cars/`);
};

export const getByFilter = (data) => {
  return api.get(`/cars/search/filter`, data);
};

export const getBySearch = (data) => {
  return api.get(`/cars/search`, data);
};

//reviews routes
export const getReviews = () => {
  return api.get(`/cars/reviews`);
};