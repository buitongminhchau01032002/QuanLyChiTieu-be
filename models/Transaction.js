import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
    {
        wallet: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Wallet',
            require: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            require: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            require: true,
        },
        description: {
            type: String,
        },
        money: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const Transaction = mongoose.model('transactions', transactionSchema);

export default Transaction;
