import express from 'express';
import { getWallets, createWallet, getWalletsById, getWalletsByUserId } from '../controllers/walletController.js';
import {createWalletValidator, getWalletsByIdValidator, getWalletsByUserIdValidator} from '../validations/wallet.js';
import validationHandler from '../middlewares/validateHandler.js';

const router = express.Router();

router.get('/:id', getWalletsByIdValidator, validationHandler, getWalletsById)
router.get('/:userId/wallets-list', getWalletsByUserIdValidator, validationHandler, getWalletsByUserId)
router.post('/create',createWalletValidator,validationHandler, createWallet)
router.get('/', getWallets);

export default router;
