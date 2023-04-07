import mongoose from 'mongoose';

const walletSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        userId: {
            type: String,
            required: true,
        },
        balance: {
            type: Number,
            min: 0,
            default: 0,
            require: true,
        },
    },
    { timestamps: true }
);

const Wallet = mongoose.model('Wallet', walletSchema);

export default Wallet;
