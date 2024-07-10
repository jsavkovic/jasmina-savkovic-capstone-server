import express from 'express';
import { registerUserHandler, loginUserHandler, getUserByIdHandler, getProfileHandler, getItemsByUserHandler } from '../controllers/userController.js';
import { authenticate } from '../middleware/authMiddleware.js'

const router = express.Router();

router.post('/register', registerUserHandler);
router.post('/login', loginUserHandler);
router.get('/profile', authenticate, getProfileHandler);
router.get('/:userId', getUserByIdHandler);
router.get('/:userId/items', getItemsByUserHandler);

export default router;
