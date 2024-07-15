import {
    getBorrowRequests,
    getBorrowRequestsByBorrower,
    getBorrowRequestsByLender,
    getBorrowRequestByItem,
    getBorrowRequestById,
    getBorrowRequestsByStatus,
    createBorrowRequest,
    checkOverlappingRequests,
    updateBorrowRequest,
    deleteBorrowRequest
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
    const { userId } = req.params;
    try {
        const borrowRequests = await getBorrowRequestsByBorrower(userId);
        res.status(200).json(borrowRequests);
    } catch (err) {
        console.error('Error fetching borrow requests:', err);
        res.status(500).json({ error: 'Failed to fetch borrow requests' });
    }
};

export const getBorrowRequestsByLenderHandler = async (req, res) => {
    const { userId } = req.params;
    const { borrow_status_id } = req.query;

    try {
        const requests = await getBorrowRequestsByLender(userId, borrow_status_id);
        res.status(200).json(requests);
    } catch (err) {
        console.error(`Error retrieving borrow requests for lender ${userId}:`, err);
        res.status(500).json({ error: 'Failed to retrieve borrow requests' });
    }
};

export const getBorrowRequestByIdHandler = async (req, res) => {
    const { requestId } = req.params;
    console.log(`Handler called for borrow request id: ${requestId}`);
    try {
        const request = await getBorrowRequestById(requestId);
        if (!request) {
            console.log(`Borrow request not found for id: ${requestId}`);
            return res.status(404).json({ error: 'Borrow request not found' });
        }
        res.status(200).json(request);
    } catch (err) {
        console.error(`Error retrieving borrow request ${requestId}:`, err);
        res.status(500).json({ error: 'Failed to retrieve borrow request' });
    }
};




export const getBorrowRequestByItemHandler = async (req, res) => {
    const { itemId } = req.params;

    try {
        const requests = await getBorrowRequestByItem(itemId);
        res.status(200).json(requests);
    } catch (err) {
        console.error('Error retrieving borrow requests:', err);
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
    const { borrower_id, lender_id, item_id, start_date, end_date, borrow_status_id } = req.body;

    try {
        console.log('Creating borrow request with data:', { borrower_id, lender_id, item_id, start_date, end_date, borrow_status_id });

        const overlappingRequests = await checkOverlappingRequests(item_id, start_date, end_date);

        if (overlappingRequests.length > 0) {
            console.log('Overlapping requests found:', overlappingRequests);
            return res.status(400).json({ error: 'There is already a request for these dates.' });
        }

        await createBorrowRequest({
            borrower_id,
            lender_id,
            item_id,
            start_date,
            end_date,
            borrow_status_id,
        });

        res.status(201).json({ message: 'Borrow request created successfully.' });
    } catch (err) {
        console.error('Error creating borrow request:', err);
        res.status(500).json({ error: 'Failed to create borrow request.' });
    }
};

export const updateBorrowRequestHandler = async (req, res) => {
    const requestId = req.params.requestId;
    const { borrow_status_id, start_date, end_date } = req.body;

    const updateData = {};
    if (borrow_status_id !== undefined) updateData.borrow_status_id = borrow_status_id;
    if (start_date !== undefined) updateData.start_date = start_date;
    if (end_date !== undefined) updateData.end_date = end_date;

    console.log(`Request to update borrow request with id: ${requestId}`);
    console.log('Update data:', updateData);

    try {
        const result = await updateBorrowRequest(requestId, updateData);
        console.log('Update result:', result);
        res.status(200).json({ message: 'Borrow request status updated successfully' });
    } catch (err) {
        console.error(`Failed to update borrow request ${requestId}:`, err);
        res.status(500).json({ error: 'Failed to update borrow request status' });
    }
};

export const deleteBorrowRequestHandler = async (req, res) => {
    const requestId = req.params.requestId;

    try {
        await deleteBorrowRequest(requestId);
        res.status(200).json({ message: 'Borrow request deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete borrow request' });
    }
};