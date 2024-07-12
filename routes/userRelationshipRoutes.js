import express from 'express';
import { getUserRelationshipByIdHandler, getFriendsHandler, getPendingRequestsHandler, createFriendRequestHandler, updateUserRelationshipStatusHandler, deleteFriendRequestHandler } from '../controllers/userRelationshipController.js';

const router = express.Router();

router.get('/:requestId', getUserRelationshipByIdHandler);
router.get('/:userId/all', getFriendsHandler);
router.get('/pending/:userId', getPendingRequestsHandler);
router.post('/', createFriendRequestHandler)
router.put('/:requestId', updateUserRelationshipStatusHandler)
router.delete('/:requestId', deleteFriendRequestHandler)

export default router;