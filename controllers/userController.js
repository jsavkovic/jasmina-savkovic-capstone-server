import { createUser, getUserByEmail, updateLastLogin } from '../models/user.js';
import bcrypt from 'bcrypt';

export const registerUserHandler = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    try {
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        const [id] = await createUser({ first_name, last_name, email, password });
        res.status(201).json({ id, first_name, last_name, email });
    } catch (err) {
        res.status(500).json({ error: 'Failed to register user' });
    }
};

export const loginUserHandler = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await getUserByEmail(email);
        if (!user) {
            return res.status(400).json({ error: 'Invalid username' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        await updateLastLogin(user.id);

        res.status(200).json({ id: user.id, first_name: user.first_name, last_name: user.last_name, email: user.email });
    } catch (err) {
        res.status(500).json({ error: 'Failed to login user' });
    }
};