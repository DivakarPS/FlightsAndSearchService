const {Flights} = require('../models/index');
const {Op, and} = require('sequelize');

class FlightRepository{
    
    #createFilter(data){  //private member function to the class
        let filter= {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        let priceFilter = [];
        if(data.minPrice){
            priceFilter.push({price : {[Op.gte] : data.minPrice}});
        }
        if(data.maxPrice){
            priceFilter.push({price : {[Op.lte] : data.maxPrice}});
        }
        let len= priceFilter.length;
         if(len>0)
            Object.assign(filter , {[Op.and] : priceFilter} );
        // console.log(filter);
        return filter;
    }
    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("something went wrong in repository layer of Flights");
            throw{error};
        }
    }
    
    async getFlight(flightId){
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("something went wrong in repository layer of Flights");
            throw{error};
        }
    }
    
    async getAllFlights(filter){
        try {
            const filterObject = this.#createFilter(filter);
            // console.log(filterObject);
            const flight = await Flights.findAll({
                where : filterObject
            });
            // console.log(flight);
            return flight;
        } catch (error) {
            console.log("something went wrong in repository layer of Flights");
            throw{error};
        }
    }
}

module.exports = FlightRepository;