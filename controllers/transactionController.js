import ResError from '../utils/ResError.js';
import Transaction from '../models/Transaction.js';
import Wallet from '../models/Wallet.js';

// [GET] /transactions/of-user
export const getTransactionsOfUser = async (req, res, next) => {
    const searchMonth = req.query.month;
    const user = req.user;
    const objFilter = { user: user._id };
    if (searchMonth) {
        const [month, year] = searchMonth.split('-').map(Number);

        const startOfMonth = new Date(year, month - 1, 1); // set start date to first day of month
        const endOfMonth = new Date(year, month, 0, 23, 59, 59, 999); // set end date to last day of month
        objFilter.createdAt = {
            $gte: startOfMonth,
            $lt: endOfMonth,
        };
    }
    try {
        const transactions = await Transaction.find(objFilter)
            .populate('wallet')
            .populate('category')
            .populate({ path: 'user', select: '-password' });
        res.json(transactions);
    } catch (err) {
        next(err);
    }
};

// [GET] /transactions/:id
export const getTransactionById = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id)
            .populate('wallet')
            .populate('category')
            .populate({ path: 'user', select: '-password' });
        if (!transaction) {
            throw new ResError(404, 'Không tìm thấy giao dịch!');
        }
        res.status(200).json(transaction);
    } catch (err) {
        next(err);
    }
};

// [POST] transactions
export const createTransaction = async (req, res, next) => {
    try {
        const user = req.user;
        const { wallet, category, money, description } = req.body;

        // Create a new transaction
        const newTransaction = new Transaction({ user: user._id, wallet, category, money, description });
        await newTransaction.save();

        // Update balance in wallet
        await Wallet.findByIdAndUpdate(wallet, { $inc: { balance: money } });

        res.status(201).json(newTransaction);
    } catch (error) {
        next(error);
    }
};
