import express from 'express';
import { getAllItemsHandler, getLendItemsHandler } from '../controllers/itemController.js'

const router = express.Router();

router.get('/items', getAllItemsHandler);
router.get('/items/lend', getLendItemsHandler);

export default router;