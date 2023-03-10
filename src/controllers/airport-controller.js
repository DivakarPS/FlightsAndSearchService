const {AirportService} = require('../services/index');

const airportService = new AirportService();

const create = async (req , res) =>{
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
            data : airport,
            success : true,
            message : "Successfully created the airport",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create the airport",
            err : error
        });
    }
}

const destroy = async (req , res) =>{
    try {
        const airport = await airportService.deleteAirport(req.params.id);
        return res.status(201).json({
            data : airport,
            success : true,
            message : "Succesfully deleted the airport",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to delete the airport",
            err : error
        });
    }
}

const update = async (req, res) =>{
    try {
        const airport = await airportService.updateAirport(req.params.id,req.body);
        return res.status(201).json({
            data : airport,
            success : true,
            message : "Succesfully updated the airport",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to update the airport",
            err : error
        });
    }
}

const get = async (req , res) =>{
    try {
        const airport =  await airportService.getAirport(req.params.id);
        return res.status(201).json({
            data : airport,
            success : true,
            message : "Succesfully fetched the airport",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fetch the airport",
            err : error
        });
    }
}

const getCityAirports = async (req , res) => {
    try {
        const airports = await airportService.getCityAirports(req.params.id);
        // console.log("from controller",airports);
        return res.status(200).json({
            data : airports,
            success : true,
            message : 'Successfully fetch airports of corresponding city',
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fetch the airport of the corresponding cities",
            err : error
        });
    }
}


module.exports = {
    create,
    destroy,
    update,
    get,
    getCityAirports
}
