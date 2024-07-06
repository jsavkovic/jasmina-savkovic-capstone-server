import express from 'express';
import { registerUserHandler, loginUserHandler, getProfileHandler } from '../controllers/userController.js';
import { authenticate } from '../middleware/authMiddleware.js'

const router = express.Router();

router.post('/register', registerUserHandler);
router.post('/login', loginUserHandler);
router.get('/profile', authenticate, getProfileHandler);

export default router;
