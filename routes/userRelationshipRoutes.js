import express from 'express';
import { getFriendsHandler, getPendingRequestsHandler } from '../controllers/userRelationshipController.js';

const router = express.Router();

router.get('/:userId', getFriendsHandler);
router.get('/pending/:userId', getPendingRequestsHandler);

export default router;