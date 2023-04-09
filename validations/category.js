import { body, param } from 'express-validator';

export const createCategoryValidator = [
    body('name').notEmpty().withMessage('Tên là bắt buộc'),
    body('type').isBoolean().withMessage('Kiểu nhóm phải là thu hoặc chi'),
    body('limit').notEmpty().withMessage('Hạn mức là bắt buộc, để giá trị < 0 để set không hạn mức'),
    body('walletId').isMongoId().withMessage('Id ví không hợp lệ'),
    
];


export const getCategorysByUserIdValidator = [param('userId').isMongoId().withMessage('ID user không hợp lệ')];

export const getCategoriesByIdValidator = [param('id').isMongoId().withMessage('ID nhóm không hợp lệ')];