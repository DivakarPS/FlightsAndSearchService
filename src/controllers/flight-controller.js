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

const getAll = async (req , res) =>{
    try {
        const flights = await flightService.getAllFlights(req.query);
        console.log("Query:",req.query);
        return res.status(201).json({
            data : flights,
            success : true,
            message : "Successfully fetched all flights",
            err : {}
        });
    } catch (error) {
        console.log("somthing went wrong in controller of Flights");
        res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to get Flights',
            err : {error}
        })
    }
}

module.exports ={
    create,
    getAll
}