import express from 'express';
import userRoutes from './users.js';
import authRoutes from './auth.js';
import walletRoutes from './wallet.js';

const router = express.Router();
router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/wallets', walletRoutes);



export default router;
