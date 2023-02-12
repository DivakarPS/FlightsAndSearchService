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

const destroy = async (req, res) => {
    try {
        const response = await flightService.deleteFlight(req.params.id);
        return res.status(201).json({
            data : response,
            success : true,
            message : "Successfully deleted the flight",
            err : {}
        });
    } catch (error) {
        console.log("somthing went wrong in controller of Flights");
        res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to delete Flight',
            err : {error}
        })
    }
}

const update = async (req, res) => {
    try {
        const response = await flightService.updateFight(req.params.id,req.body);
        return res.status(201).json({
            data : response,
            success : true,
            message : "Successfully updated the flight",
            err : {}
        });
    } catch (error) {
        console.log("somthing went wrong in controller of Flights");
        res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to update the Flight',
            err : {error}
        })
    }
}

const get = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.params.id);
        return res.status(201).json({
            data : flight,
            success : true,
            message : "Successfully fetched the flight",
            err : {}
        });
    } catch (error) {
        console.log("somthing went wrong in controller of Flights");
        res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to u get the Flight',
            err : {error}
        })
    }
}



module.exports ={
    create,
    getAll,
    destroy,
    update,
    get
}