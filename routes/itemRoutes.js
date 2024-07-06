import express from 'express';
import { getAllItemsHandler, getLendItemsHandler, getGiftItemsHandler, createItemHandler, getItemByIdHandler, updateItemByIdHandler, deleteItemByIdHandler } from '../controllers/itemController.js'

const router = express.Router();

router.get('/', getAllItemsHandler);
router.get('/lend', getLendItemsHandler);
router.get('/gift', getGiftItemsHandler);
router.post('/', createItemHandler);
router.get('/:itemId', getItemByIdHandler);
router.put('/:itemId', updateItemByIdHandler);
router.delete('/:itemId', deleteItemByIdHandler);

export default router;