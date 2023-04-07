import { body, param } from 'express-validator';

export const createWalletValidator = [
    body('name').notEmpty().withMessage('Tên là bắt buộc'),
    body('userId').isMongoId().withMessage('Id không hợp lệ'),
    
];


export const getWalletsByUserIdValidator = [param('userId').isMongoId().withMessage('ID user không hợp lệ')];

export const getWalletsByIdValidator = [param('id').isMongoId().withMessage('ID ví không hợp lệ')];