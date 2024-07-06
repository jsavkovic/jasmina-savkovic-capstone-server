import express from 'express';
import { getBorrowRequestsHandler, createBorrowRequestHandler } from '../controllers/borrowRequestController.js';

const router = express.Router();

router.get('/', getBorrowRequestsHandler);
router.post('/', createBorrowRequestHandler);

export default router;