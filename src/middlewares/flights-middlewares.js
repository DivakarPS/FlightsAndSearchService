const validateCreateFlight = (req , res, next) => {
    if(!req.body.flightNumber ||
       !req.body.airplaneId ||
       !req.body.departureAirportId ||
       !req.body.arrivalTime ||
       !req.body.departureTime ||
       !req.body.price
    ){
        return res.status(400).json({
            data : {},
            status : false,
            message : 'Invalid request',
            err : 'Missing mandatory details'
        });
    }

    next();
}

module.exports = {
    validateCreateFlight
}