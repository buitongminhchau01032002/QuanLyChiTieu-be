import express from 'express';
import { getCategories, createCategory, getcategoriesByUserId, getcategoryById } from '../controllers/categoryController.js';
import {createCategoryValidator, getCategoriesByIdValidator, getCategorysByUserIdValidator} from '../validations/category.js';
import validationHandler from '../middlewares/validateHandler.js';
import isAuth from '../middlewares/isAuth.js';

const router = express.Router();

router.get('/cur-user', isAuth, getcategoriesByUserId)
router.post('/create', isAuth ,createCategoryValidator,validationHandler, createCategory)
router.get('/:id', getCategoriesByIdValidator, validationHandler, getcategoryById)
router.get('/', getCategories);
export default router;
