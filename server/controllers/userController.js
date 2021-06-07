import User from '../models/user.js'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken';
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
        jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
            (err) ? res.status(403).json({ msg: err.message }) : res.status(201).json(authData.user)
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

    },
    login: (req, res) => {
        const { email, password } = req.body;
        User.findOne({ email })
            .then(user => {
                if (!user.comparePasswords(password)) {
                    res.status(400).json({ msg: 'Incorrect Password' })
                    return;
                }
                jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
                    (err) ? res.status(401).json(err.stack) :
                        res.status(200).json({ token })
                })
            }).catch(err => {
                res.status(400).json({ msg: err.stack })
            })
    }
}




export default userController;