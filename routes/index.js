import express from 'express';
import userRoutes from './users.js';
import authRoutes from './auth.js';
import walletRoutes from './wallet.js';
import categoryRoutes from './category.js';

const router = express.Router();
router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/wallets', walletRoutes);
router.use('/categories', categoryRoutes);



export default router;
