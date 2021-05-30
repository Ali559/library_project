import mongoose from 'mongoose';
const { Schema } = mongoose;
import bcrypt from 'bcrypt';
const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    userImage: {
        type: String
    }
});


UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 20).then(hash => {
        this.password = hash;
        next();
    }).catch(err => {
        next(err.message)
    })
})

UserSchema.methods.comparePasswords = function (inputPassword) {
    let user = this;
    return bcrypt.compare(inputPassword, user.password)
}

export default mongoose.model('User', UserSchema);
