import express from 'express';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

app.use(express.json());
app.use(cors());
app.use('/posts', postRoutes);