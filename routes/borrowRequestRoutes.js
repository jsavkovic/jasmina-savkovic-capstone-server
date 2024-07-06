import express from 'express';
import {
    getBorrowRequestsHandler,
    getBorrowRequestsByBorrowerHandler,
    getBorrowRequestsByLenderHandler,
    getBorrowRequestByItemHandler,
    getBorrowRequestByIdHandler,
    createBorrowRequestHandler
} from '../controllers/borrowRequestController.js';

const router = express.Router();

router.get('/', getBorrowRequestsHandler);
router.get('/borrower/:userId', getBorrowRequestsByBorrowerHandler);
router.get('/lender/:userId', getBorrowRequestsByLenderHandler);
router.get('/item/:itemId', getBorrowRequestByItemHandler);
router.get('/:requestId', getBorrowRequestByIdHandler);

router.post('/', createBorrowRequestHandler);

export default router;