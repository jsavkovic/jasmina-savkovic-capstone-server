import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import {
    getAllItemsHandler,
    getLendItemsHandler,
    getGiftItemsHandler,
    createItemHandler,
    getItemByIdHandler,
    updateItemByIdHandler,
    deleteItemByIdHandler
} from '../controllers/itemController.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join('uploads/');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const extension = file.mimetype.split('/')[1];
        cb(null, `${Date.now()}.${extension}`);
    }
});

const upload = multer({ storage });

router.post('/', upload.single('image'), createItemHandler);
router.get('/', getAllItemsHandler);
router.get('/lend', getLendItemsHandler);
router.get('/gift', getGiftItemsHandler);
router.get('/:itemId', getItemByIdHandler);
router.put('/:itemId', updateItemByIdHandler);
router.delete('/:itemId', deleteItemByIdHandler);

export default router;
