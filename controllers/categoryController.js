import ResError from '../utils/ResError.js';
import Category from '../models/Category.js';
import User from '../models/User.js';

// [GET] /categories
export const getCategories = async (req, res, next) => {
    try {

        //get all categories in database
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        next(err);
    }
};

//[POST] /categories/create
export const createCategory = async (req, res, next) => {
    try {
        // const { name, type, walletId } = req.body;
        //console.log(req.body.user);

        const name = req.body.name;
        const type = req.body.type;
        const limit = req.body.limit <= 0 ? -1 : (req.body.limit);
        const userId = req.user._id;
        const walletId = req.body.walletId;

        //create a new category
        const newCategory = new Category({ name, type, limit, userId, walletId })
        await newCategory.save();

        res.status(201).json(newCategory);

    } catch (err) {
        next(err);
    }
}


// [GET] /categories/:id
export const getcategoryById = async (req, res, next) => {
    try {
        const category = await Category.findOne({ _id: req.params.id });
        if (!category) {
            throw new ResError(404, 'Không tìm thấy nhóm!');
        }
        res.json(category);
    } catch (err) {
        next(err);
    }
};

// [GET] /categories/list // auth user
export const getcategoriesByUserId = async (req, res, next) => {
    try {
        //const user = await User.findById({_id:req.params.userId});
        const user = await User.findById({ _id: req.user._id });

        if (!user) {
            throw new ResError(404, 'Không tìm thấy user!');
        }

        const categories = await Category.find({ userId: user._id });
        res.json(categories);
        //res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};
