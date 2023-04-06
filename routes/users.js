import express from 'express';
import { getUsers, getUserById, getUserByEmail } from '../controllers/userController.js';
import { getUserByIdValidator, getUserByEmailValidator } from '../validations/user.js';
import validationHandler from '../middlewares/validateHandler.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserByIdValidator, validationHandler, getUserById);
router.get('/email/:email', getUserByEmailValidator, validationHandler, getUserByEmail);

export default router;
