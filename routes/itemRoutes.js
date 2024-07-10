import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import {
    getAllItemsHandler,
    createItemHandler,
    getItemByIdHandler,
    updateItemByIdHandler,
    updateItemStatusHandler,
    deleteItemByIdHandler
} from '../controllers/itemController.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, 'uploads');
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
router.get('/:itemId', getItemByIdHandler)
router.put('/:itemId', upload.single('image'), updateItemByIdHandler);
router.put('/:itemId/status', updateItemStatusHandler);
router.delete('/:itemId', deleteItemByIdHandler);

export default router;
