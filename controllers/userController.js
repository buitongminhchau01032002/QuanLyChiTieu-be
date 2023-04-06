import ResError from '../models/ResError.js';
import User from '../models/User.js';

// [GET] /users
const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        next(err);
    }
};

// [GET] /users/:id
const getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            throw new ResError(404, 'Không tìm thấy tài khoản!');
        }
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

// [GET] /users/email/:email
const getUserByEmail = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        if (!user) {
            throw new ResError(404, 'Không tìm thấy tài khoản!');
        }
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

export { getUsers, getUserById, getUserByEmail };
