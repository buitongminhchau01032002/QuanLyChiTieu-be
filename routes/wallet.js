import express from 'express';
import { getWallets, createWallet, getWalletsById, getWalletsByUserId } from '../controllers/walletController.js';
import {createWalletValidator, getWalletsByIdValidator, getWalletsByUserIdValidator} from '../validations/wallet.js';
import validationHandler from '../middlewares/validateHandler.js';
import isAuth from '../middlewares/isAuth.js';

const router = express.Router();

router.get('/cur-user', isAuth, getWalletsByUserId)
router.post('/create', isAuth, createWalletValidator,validationHandler, createWallet)
router.get('/:id', getWalletsByIdValidator, validationHandler, getWalletsById)
router.get('/', getWallets);
export default router;
