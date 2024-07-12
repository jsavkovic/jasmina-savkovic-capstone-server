import express from 'express';
import {
    getBorrowRequestsHandler,
    getBorrowRequestsByBorrowerHandler,
    getBorrowRequestsByLenderHandler,
    getBorrowRequestByItemHandler,
    getBorrowRequestByIdHandler,
    getBorrowRequestsByStatusHandler,
    createBorrowRequestHandler,
    updateBorrowRequestHandler,
    deleteBorrowRequestHandler
} from '../controllers/borrowRequestController.js';

const router = express.Router();

router.get('/', getBorrowRequestsHandler);
router.get('/borrower/:userId', getBorrowRequestsByBorrowerHandler);
router.get('/lender/:userId', getBorrowRequestsByLenderHandler);
router.get('/item/:itemId', getBorrowRequestByItemHandler);
router.get('/:requestId', getBorrowRequestByIdHandler);
router.get('/status/:statusId', getBorrowRequestsByStatusHandler);

router.post('/', createBorrowRequestHandler);
router.put('/:requestId', updateBorrowRequestHandler);
router.delete('/:requestId', deleteBorrowRequestHandler);

export default router;