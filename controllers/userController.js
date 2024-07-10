import {
    createUser,
    getUserByEmail,
    getUserById,
    updateLastLogin,
    getItemsByUser
} from '../models/user.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/auth.js';

export const registerUserHandler = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    try {
        console.log("Registering user with email:", email);
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            console.log("User already exists with email:", email);
            return res.status(400).json({ error: 'User already exists' });
        }

        console.log("Creating user:", { first_name, last_name, email, password });
        const [id] = await createUser({ first_name, last_name, email, password });
        console.log("User created with ID:", id);

        res.status(201).json({ id, first_name, last_name, email });
    } catch (err) {
        console.error("Error registering user:", err);
        res.status(500).json({ error: 'Failed to register user' });
    }
};

export const loginUserHandler = async (req, res) => {
    const { email, password } = req.body;

    try {
        console.log("Logging in user with email:", email);
        const user = await getUserByEmail(email);
        if (!user) {
            console.log("User not found with email:", email);
            return res.status(400).json({ error: 'Invalid username' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            console.log("Invalid password for user with email:", email);
            return res.status(400).json({ error: 'Invalid password' });
        }

        await updateLastLogin(user.id);
        console.log("User logged in with ID:", user.id);

        const token = generateToken(user);

        res.status(200).json({
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            token
        });
    } catch (err) {
        console.error("Error logging in user:", err);
        res.status(500).json({ error: 'Failed to login user' });
    }
};

export const getUserByIdHandler = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await getUserById(userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        console.error(`Error retrieving user ${userId}:`, err);
        res.status(500).json({ error: 'Failed to retrieve user' });
    }
};

export const getProfileHandler = async (req, res) => {
    const userId = req.user.id;

    try {
        const user = await getUserById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve profile' });
    }
};

export const getItemsByUserHandler = async (req, res) => {
    const { userId } = req.params;
    const { status_id } = req.query;

    try {
        const items = await getItemsByUser(userId, status_id);
        if (items.length > 0) {
            res.status(200).json(items);
        } else {
            res.status(404).json({ error: 'No items found for this user' });
        }
    } catch (err) {
        console.error(`Error retrieving items for user ${userId}:`, err);
        res.status(500).json({ error: 'Failed to retrieve items' });
    }
};
