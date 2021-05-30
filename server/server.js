import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.SERVER_PORT;
import apiRoute from './routes/apiRoutes.js'


mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static('public/images'))

app.use('/api', apiRoute)



app.listen(port, err => {
    err ? console.log(err.message) : console.log(`Running on http://localhost:${port}`)
})