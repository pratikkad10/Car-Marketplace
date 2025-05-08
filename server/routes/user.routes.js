import express from 'express'
import { login, register, resetPasssword, verifyUser, requestResetPassword, getMe, logout } from '../controller/user.controller.js';
import { isLoggedIn } from '../middleware/user.middleware.js';
const router = express.Router();

router.post('/register', register);
router.get('/verify/:token', verifyUser);
router.post('/login', login);
router.post('/forgotPassword', requestResetPassword);
router.post('/reset-password/:token', resetPasssword);

router.get('/profile',isLoggedIn, getMe);
// router.get('/logout',isLoggedIn, logout);

router.get('/logout', (req, res) => {
    res.clearCookie('token', {
        httpOnly: true, // Matches the cookie's original settings
        secure: true,   // Same as when it was set
        sameSite: 'strict', // Ensure security against CSRF
    });
    res.status(200).json({ message: 'Logged out successfully' });
});


export default router;