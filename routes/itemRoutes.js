import express from 'express';
import { getAllItemsHandler } from '../controllers/itemController.js'

const router = express.Router();

router.get('/items', getAllItemsHandler);

export default router;