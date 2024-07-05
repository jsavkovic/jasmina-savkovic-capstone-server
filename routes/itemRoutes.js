import express from 'express';
import { getAllItemsHandler, getLendItemsHandler, getGiftItemsHandler, createItemHandler, getItemByIdHandler, updateItemByIdHandler } from '../controllers/itemController.js'

const router = express.Router();

router.get('/items', getAllItemsHandler);
router.get('/items/lend', getLendItemsHandler);
router.get('/items/gift', getGiftItemsHandler);
router.post('/items', createItemHandler);
router.get('/items/:itemId', getItemByIdHandler);
router.put('/items/:itemId', updateItemByIdHandler);

export default router;