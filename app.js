require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const fileUpload = require('express-fileupload');
const errorController = require('./api/controller/errorController')
const Nodemailer = require('./api/service/Nodemailer')

// db setup
const mongoose = require('mongoose')
const MONGODB_URL = require('./config/key').MONGODB_URL;
mongoose.connect(
            MONGODB_URL, 
            {
                useNewUrlParser: true, 
                useUnifiedTopology : true
            }, 
            (err, res) => {
                if(!err){
                    console.error('db connected');
                }else {
                    console.log(err);
                    return err;
                }
            }
        )            

// morgan http request logging middleware
if(process.env.NODE_ENV == 'development'){
    app.use(morgan(':date[clf] :method :url :status :response-time ms'))
}

//Here you can pass helpers that you would normally define in registerHelpers
//and you can also define stuff like `defaultLayout` and `partialsDir`
var hbs = exphbs.create({
    helpers: {
        sayHello: function () { alert("Hello World") },
        inc: function(value, options){
            return parseInt(value) + 1;
        }
    },
    defaultLayout: 'main',
    extname: '.hbs'
});
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

app.use(express.static('public'))

// to handle post request
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//
const corsOptions = {
    origin: process.env.FRONTEND_HOST, 
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
// console.log(corsOptions);
app.use(cors(corsOptions))
// express-fileupload 
app.use(fileUpload())
// options -- { useTempFiles : true,tempFileDir : '/tmp/' }

// 
Nodemailer.sendMail({to: 'harsh_11913052@nitkkr.ac.in'})


// specify all routers here
const userRoute = require('./api/routes/User')
const someRoutes = require('./api/routes/Route')
const routeWithoutAuth = require('./api/routes/RouteWithoutAuth')
const auth = require('./api/middleware/auth')


app.use('/api', routeWithoutAuth)
app.use('/api/user', auth, userRoute)
app.use('/api', auth, someRoutes)

app.route('/')
    .get((req, res)=> {
        res.status(200).send('ok')
    });

// middleware to handle api errors(operational error)
app.use(errorController);

module.exports = app;