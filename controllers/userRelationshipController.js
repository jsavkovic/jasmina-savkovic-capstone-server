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
    const { userId } = req.params;

    try {
        const relationships = await getFriendsByUserId(userId);
        console.log('Fetched relationships:', relationships);
        const friends = relationships.map(rel => {
            const isSender = rel.sender_id === parseInt(userId, 10);
            const friendId = isSender ? rel.receiver_id : rel.sender_id;
            const friendFirstName = isSender ? rel.receiver_first_name : rel.sender_first_name;
            const friendLastName = isSender ? rel.receiver_last_name : rel.sender_last_name;
            const friendEmail = isSender ? rel.receiver_email : rel.sender_email;
            const friendImage = isSender ? rel.receiver_image : rel.sender_image;
            return {
                id: friendId,
                first_name: friendFirstName,
                last_name: friendLastName,
                email: friendEmail,
                image: friendImage,
            };
        });
        console.log('Formatted friends:', friends);
        res.status(200).json(friends);
    } catch (err) {
        console.error(`Error retrieving friends for user ${userId}:`, err);
        res.status(500).json({ error: 'Failed to retrieve friends' });
    }
};

export const getPendingRequestsHandler = async (req, res) => {
    const { userId } = req.params;
    if (!userId) {
        return res.status(400).json({ message: 'Missing userId' });
    }

    try {
        const pendingRequests = await getPendingRequestsByUserId(userId);
        res.status(200).json(pendingRequests);
    } catch (err) {
        console.error('Error fetching pending friend requests:', err);
        res.status(500).json({ message: 'Error fetching pending friend requests', error: err.message });
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