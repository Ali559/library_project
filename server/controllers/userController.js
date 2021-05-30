import User from '../models/user.js'

import mongoose from 'mongoose'
const userController = {
    getAll: (req, res) => {
        User.find().then(users => {
            users ? res.status(201).json(users) : res.status(404).json({ msg: 'User not found' })
        }).catch(err => {
            res.status(400).json({ err: err.message })
            return;
        })
    },
    getOne: (req, res) => {
        const { userName } = req.params;
        User.findOne({ userName }).then(user => {
            user ? res.status(201).json(user) : res.status(404).json({ msg: 'User not found' })
        }).catch(err => {
            res.json({ msg: err.message })
            return;
        })
    },
    edit: (req, res) => {
    },
    delete: (req, res) => {
        const { id } = req.params;
        User.findByIdAndDelete(mongoose.Types.objectId(id))
            .then(() => {
                res.status(201).json({ msg: 'User deleted' })
            }).catch(err => {
                res.status(401).json({ msg: err.message });
                return;
            })
    },
    signUp: async (req, res) => {
        const { userName, email, password, userImage } = req.body;
        const userNameExists = await User.findOne({ userName })
        const userExists = await User.findOne({ email })
        if (userExists) {
            res.status(401).json({ msg: 'User already exists' })
            return;
        }
        if (userNameExists) {
            res.status(401).json({ msg: 'userName is taken' })
            return;
        }
        User.create({
            userName,
            email,
            password,
            userImage
        }).then(() => {
            res.status(201).json({ msg: 'User Created' })
        }).catch(err => {
            res.status(500).json({ msg: err.message })
        })

    },
    login: (req, res) => {
        const { email, password } = req.body;
        User.findOne({ email }).then(user => {
            if (user.comparePasswords(password)) {
                res.status(201).json({ msg: 'User Logged in' })
            }
        }).catch(err => {
            res.status(400).json({ msg: err.stack })
        })
    }
}




export default userController;