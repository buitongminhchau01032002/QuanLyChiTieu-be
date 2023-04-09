import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

       type: {
            type: Boolean,
            default: false,
            require: true,
       },
       limit: {
            type: Number,
            default: -1,
            require: true,
       },
       userId: {
        type: String,
        required: true,
       },
        walletId: {
            type: String,
            min: 0,
            default: 0,
            require: true,
        },
    },
    { timestamps: true }
);

const Category = mongoose.model('Category', categorySchema);

export default Category;
