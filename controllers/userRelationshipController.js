import { getFriendsByUserId, getPendingRequestsByUserId } from '../models/userRelationship.js';

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