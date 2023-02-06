const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async (req ,res) =>{
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data : flight,
            success : true,
            message : "successfully created the flight",
            err : {}
        });
    } catch (error) {
        console.log("somthing went wrong in controller of Flights");
        res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to create Flight',
            err : {error}
        })
    }
}

module.exports ={
    create
}