import express from 'express';
import { createTransaction, getTransactionById, getTransactionsOfUser } from '../controllers/transactionController.js';
import isAuth from '../middlewares/isAuth.js';
import { createTransactionValidator, getTransactionByIdValidator } from '../validations/transaction.js';
import validationHandler from '../middlewares/validateHandler.js';

const router = express.Router();

router.get('/of-user', isAuth, getTransactionsOfUser);
router.get('/:id', getTransactionByIdValidator, validationHandler, getTransactionById);
router.post('/', isAuth, createTransactionValidator, validationHandler, createTransaction);

export default router;
