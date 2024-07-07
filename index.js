import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import itemRoutes from './routes/itemRoutes.js';
import borrowRequestRoutes from './routes/borrowRequestRoutes.js';
import userRelationshipRoutes from './routes/userRelationshipRoutes.js';
import userRoutes from './routes/userRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

// multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, 'uploads/');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const extension = file.mimetype.split('/')[1];
        cb(null, `${Date.now()}.${extension}`);
    }
});

const upload = multer({ storage });

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/items', itemRoutes);
app.use('/borrow-requests', borrowRequestRoutes);
app.use('/friends', userRelationshipRoutes);
app.use('/users', userRoutes);

app.get('/', (_req, res) => {
    res.send('This is a homePage for Lendaroo, please make a request!!');
});

// Handle file upload 
app.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send({ message: 'Please upload a file' });
    }
    res.send({
        message: 'File uploaded successfully',
        filename: file.filename,
    });
});

app.listen(PORT, () => {
    console.log('App is running on port ', PORT);
});
