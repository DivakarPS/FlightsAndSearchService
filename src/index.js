const express = require('express');
const {PORT} = require('./config/serverConfig');
const bodyParser = require('body-parser');
const ApiRoutes = require('./routes/index');
const {FlightMiddlewares} = require('./middlewares/index');

const {City , Airport } = require('./models/index');
const db = require('./models/index');

const setupAndStartServer = async () =>{

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT,async ()=>{
        console.log(`Server started at ${PORT}`);

    //    const airports = await Airport.findAll();
    //    console.log(airports);
    // console.log(db);
    // console.log(FlightMiddlewares);
        if(process.env.SYNC_DB=='true'){
            // console.log("into sybc db");
            db.sequelize.sync({alter:true});
        }
    });
}

setupAndStartServer();
