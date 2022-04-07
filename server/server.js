const express = require('express')
const mongoose = require ('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const userUpload = require('./route/EmployeeRoute')

const URL = require ('./config.json').url
const PORT = 5200

const app = express();

//fileupload
app.use('/user',userUpload)


app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded( { extended: false }));

mongoose.Promise = global.Promise;
mongoose.connect(URL, { useNewUrlParser:true})
.then(res => {console.log('mongodb connected');
}).catch(err => {
    console.log(err.message);
})

//default route
app.use('/employees', require('./route/EmployeeRoute'));

//server call
app.listen(PORT,() => {
    console.log(`server is up and running at http://localhost:${PORT}`);
})