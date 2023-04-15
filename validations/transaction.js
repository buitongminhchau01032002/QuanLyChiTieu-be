import { body, param } from 'express-validator';

export const getAllTransactionsValidator = [];

export const getTransactionByIdValidator = [param('id').isMongoId().withMessage('ID không hợp lệ')];

export const createTransactionValidator = [
    body('wallet').notEmpty().withMessage('Ví là bắt buộc').isMongoId().withMessage('ID ví không hợp lệ'),
    body('money').notEmpty().withMessage('Số tiền là bắt buộc').isInt().withMessage('Số tiền phải là số nguyên'),
];
