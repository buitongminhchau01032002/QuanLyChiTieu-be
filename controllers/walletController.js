import ResError from '../utils/ResError.js';
import Wallet from '../models/Wallet.js';
import User from '../models/User.js';

// [GET] /wallets
export const getWallets = async (req, res, next) => {
    try {

        //get all wallets in database
        const wallets = await Wallet.find();
        res.json(wallets);
    } catch (err) {
        next(err);
    }
};

//[POST] /wallets/create
export const createWallet = async (req, res, next) => {
    try {
         //const { name, _id, balance } = req.body.user;
         //console.log(req.body.user);

         const name = req.body.name;
         const userId = req.user._id;
         const balance = req.body.balance;

        //create a new wallet
        const newWallet = new Wallet({name, userId, balance })
        await newWallet.save();

        res.status(201).json(newWallet);

    } catch (err) {
        next(err);
    }
}


// [GET] /wallets/:id
export const getWalletsById = async (req, res, next) => {
    try {
        const wallet = await Wallet.findOne({_id: req.params.id});
        if (!wallet) {
            throw new ResError(404, 'Không tìm thấy ví!');
        }
        res.json(wallet);
    } catch (err) {
        next(err);
    }
};

// [GET] /wallets/list
export const getWalletsByUserId = async (req, res, next) => {
    try {
        //const user = await User.findById({_id:req.params.userId});
        const user = await User.findById({_id:req.user._id});

        if (!user) {
            throw new ResError(404, 'Không tìm thấy user!');
        }

        const wallets = await Wallet.find({ userId: user._id });
        res.json(wallets);
        //res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};
