import express from 'express';
import { createPost, getPosts, getPost } from '../controllers/posts.js';

const router = express.Router({ mergeParams: true});
router.get('/', getPosts);
router.post('/', createPost);
router.get('/:postId', getPost);

export default router;