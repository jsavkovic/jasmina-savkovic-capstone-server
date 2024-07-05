import express from 'express';
import { getAllItemsHandler, getLendItemsHandler, getGiftItemsHandler, createItemHandler, getItemByIdHandler } from '../controllers/itemController.js'

const router = express.Router();

router.get('/items', getAllItemsHandler);
router.get('/items/lend', getLendItemsHandler);
router.get('/items/gift', getGiftItemsHandler);
router.get('/items/:itemId', getItemByIdHandler)
router.post('/items', createItemHandler);

export default router;