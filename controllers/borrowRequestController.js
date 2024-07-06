import { getBorrowRequests, createBorrowRequest } from '../models/borrowRequest.js'

export const getBorrowRequestsHandler = async (req, res) => {
    const userId = req.query.userId;
    const itemId = req.query.itemId;

    try {
        const requests = await getBorrowRequests(userId, itemId);
        res.status(200).json(requests);
    } catch (err) {
        console.error('Error fetching borrow requests:', err);
        res.status(500).json({ error: 'Failed to retrieve borrow requests' });
    }
};

export const createBorrowRequestHandler = async (req, res) => {
    const {
        borrower_id,
        lender_id,
        item_id,
        start_date,
        end_date,
        borrow_status_id
    } = req.body;

    try {
        const [id] = await createBorrowRequest({
            borrower_id,
            lender_id,
            item_id,
            start_date,
            end_date,
            borrow_status_id
        });

        const newBorrowRequest = {
            id,
            borrower_id,
            lender_id,
            item_id,
            start_date,
            end_date,
            borrow_status_id
        };

        res.status(201).json(newBorrowRequest);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create borrow request' });
    }
};