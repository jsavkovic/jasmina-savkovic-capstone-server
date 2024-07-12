import {
    getBorrowRequests,
    getBorrowRequestsByBorrower,
    getBorrowRequestsByLender,
    getBorrowRequestByItem,
    getBorrowRequestById,
    getBorrowRequestsByStatus,
    createBorrowRequest,
    updateBorrowRequest
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
        console.error(`Error retrieving borrow requests for lender ${userId}:`, err);
        res.status(500).json({ error: 'Failed to retrieve borrow requests' });
    }
};

export const getBorrowRequestByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const request = await getBorrowRequestById(id);
        if (!request) {
            return res.status(404).json({ error: 'Borrow request not found' });
        }
        res.status(200).json(request);
    } catch (err) {
        console.error(`Error retrieving borrow request ${id}:`, err);
        res.status(500).json({ error: 'Failed to retrieve borrow request' });
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

export const getBorrowRequestsByStatusHandler = async (req, res) => {
    const statusId = req.params.statusId;

    try {
        const requests = await getBorrowRequestsByStatus(statusId);
        res.status(200).json(requests);
    } catch (err) {
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

export const updateBorrowRequestHandler = async (req, res) => {
    const requestId = req.params.requestId;
    const { borrow_status_id, start_date, end_date } = req.body;

    const updateData = {};
    if (borrow_status_id) updateData.borrow_status_id = borrow_status_id;
    if (start_date) updateData.start_date = start_date;
    if (end_date) updateData.end_date = end_date;

    try {
        await updateBorrowRequest(requestId, updateData);
        res.status(200).json({ message: 'Borrow request status updated successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update borrow request status' });
    }
};