import {
    getBorrowRequests,
    getBorrowRequestsByBorrower,
    getBorrowRequestsByLender,
    getBorrowRequestByItem,
    getBorrowRequestById,
    createBorrowRequest
} from '../models/borrowRequest.js'


export const getBorrowRequestsHandler = async (req, res) => {
    try {
        const requests = await getBorrowRequests();
        res.status(200).json(requests);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve borrow requests' });
    }
};

export const getBorrowRequestsByBorrowerHandler = async (req, res) => {
    const userId = req.params.userId;

    try {
        const requests = await getBorrowRequestsByBorrower(userId);
        res.status(200).json(requests);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve borrow requests' });
    }
}

export const getBorrowRequestsByLenderHandler = async (req, res) => {
    const userId = req.params.userId;

    try {
        const requests = await getBorrowRequestsByLender(userId);
        res.status(200).json(requests);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve borrow requests' });
    }
};

export const getBorrowRequestByItemHandler = async (req, res) => {
    const itemId = req.params.itemId;

    try {
        const requests = await getBorrowRequestByItem(itemId);
        res.status(200).json(requests);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve borrow requests' });
    }
};

export const getBorrowRequestByIdHandler = async (req, res) => {
    const requestId = req.params.requestId;

    try {
        const request = await getBorrowRequestById(requestId);
        if (request) {
            res.status(200).json(request);
        } else {
            res.status(404).json({ error: 'Borrow request not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve borrow request' });
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