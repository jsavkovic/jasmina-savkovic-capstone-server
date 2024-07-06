import { getUserRelationshipById, getFriendsByUserId, getPendingRequestsByUserId, createFriendRequest, getExistingRelationship, updateUserRelationshipStatus, deleteFriendRequest } from '../models/userRelationship.js';

export const getUserRelationshipByIdHandler = async (req, res) => {
    const { requestId } = req.params;

    try {
        const relationship = await getUserRelationshipById(requestId);
        if (relationship) {
            res.status(200).json(relationship);
        } else {
            res.status(404).json({ error: 'User relationship not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve user relationship' });
    }
};

export const getFriendsHandler = async (req, res) => {
    const userId = req.params.userId;

    try {
        const relationships = await getFriendsByUserId(userId);
        const friendIds = relationships.map(rel => {
            const friendId = rel.sender_id === parseInt(userId) ? rel.receiver_id : rel.sender_id;
            const friendFirstName = rel.sender_id === parseInt(userId) ? rel.receiver_first_name : rel.sender_first_name;
            const friendLastName = rel.sender_id === parseInt(userId) ? rel.receiver_last_name : rel.sender_last_name;
            return {
                id: friendId,
                first_name: friendFirstName,
                last_name: friendLastName,
                relationship_status_id: rel.relationship_status_id
            };
        });
        res.status(200).json(friendIds);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve friends' });
    }
};

export const getPendingRequestsHandler = async (req, res) => {
    const userId = req.params.userId;

    try {
        const relationships = await getPendingRequestsByUserId(userId);
        const pendingRequests = relationships.map(rel => {
            const requestId = rel.sender_id === parseInt(userId) ? rel.receiver_id : rel.sender_id;
            const requestFirstName = rel.sender_id === parseInt(userId) ? rel.receiver_first_name : rel.sender_first_name;
            const requestLastName = rel.sender_id === parseInt(userId) ? rel.receiver_last_name : rel.sender_last_name;
            return {
                id: requestId,
                first_name: requestFirstName,
                last_name: requestLastName,
                relationship_status_id: rel.relationship_status_id
            };
        });
        res.status(200).json(pendingRequests);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve pending friend requests' })
    }
};

export const createFriendRequestHandler = async (req, res) => {
    const { sender_id, receiver_id } = req.body;

    if (sender_id === receiver_id) {
        return res.status(400).json({ error: 'You cannot send a friend request to yourself' });
    }

    try {
        const existingRelationship = await getExistingRelationship(sender_id, receiver_id);
        if (existingRelationship) {
            return res.status(400).json({ error: 'A friend request already exists or you are already friends' });
        }

        const [id] = await createFriendRequest({
            sender_id,
            receiver_id,
            relationship_status_id: 1
        });

        res.status(201).json({ id, message: 'Friend request sent successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to send friend request' });
    }
};

export const updateUserRelationshipStatusHandler = async (req, res) => {
    const { requestId } = req.params;
    const { statusId } = req.body;

    try {
        await updateUserRelationshipStatus(requestId, statusId);
        const updatedRelationship = await getUserRelationshipById(requestId);
        res.status(200).json(updatedRelationship);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update user relationship status' });
    }
};

export const deleteFriendRequestHandler = async (req, res) => {
    const { requestId } = req.params;

    try {
        const result = await deleteFriendRequest(requestId);
        if (result) {
            res.status(200).json({ message: 'Friend request cancelled successfully' });
        } else {
            res.status(404).json({ error: 'Friend request not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to cancel friend request' })
    }
};