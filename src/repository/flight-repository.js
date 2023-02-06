const {Flights} = require('../models/index');

class FlightRepository{
    
    async createFlight(data){
        try {
            const flight = Flights.create(data);
            return flight;
        } catch (error) {
            console.log("something went wrong in repository layer of Flights");
            throw{error};
        }
    }

}

module.exports = FlightRepository;