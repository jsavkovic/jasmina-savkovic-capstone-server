import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret = process.env.JWT_SECRET || 'your_jwt_secret_key';
const expiresIn = process.env.JWT_EXPIRES_IN || '48h';

export const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email },
        secret,
        { expiresIn: expiresIn }
    );
};

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, secret);
    } catch (err) {
        return null;
    }
}