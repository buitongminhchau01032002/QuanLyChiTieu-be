import { body, param } from 'express-validator';

export const createWalletValidator = [
    body('name').notEmpty().withMessage('Tên là bắt buộc'),
    body('balance').notEmpty().withMessage('Số dư ví không được để trống'),
    
];


export const getWalletsByUserIdValidator = [param('userId').isMongoId().withMessage('ID user không hợp lệ')];

export const getWalletsByIdValidator = [param('id').isMongoId().withMessage('ID ví không hợp lệ')];