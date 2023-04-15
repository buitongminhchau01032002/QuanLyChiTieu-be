import express from 'express';
import userRoutes from './users.js';
import authRoutes from './auth.js';
import walletRoutes from './wallet.js';
import categoryRoutes from './category.js';
import transactionRoute from './transactions.js';

const router = express.Router();
router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/wallets', walletRoutes);
router.use('/categories', categoryRoutes);
router.use('/transactions', transactionRoute);

export default router;
