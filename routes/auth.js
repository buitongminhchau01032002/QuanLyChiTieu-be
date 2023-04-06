import express from 'express';
import { login, register } from '../controllers/authController.js';
import { loginValidator, registerValidator } from '../validations/auth.js';
import validationHandler from '../middlewares/validateHandler.js';

const router = express.Router();

router.post('/register', registerValidator, validationHandler, register);
router.post('/login', loginValidator, validationHandler, login);

export default router;
