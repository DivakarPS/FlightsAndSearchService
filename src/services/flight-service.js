const {AirplaneRepository, FlightRepository} = require('../repository/index');
const {compareTime,compareDate} = require('../utils/helper');

class FlightService {

    constructor(){
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw{error : "Arrival Time cannot be less than departure time"};
            }
            if(!compareDate(data.arrivalTime,data.departureTime)){
                throw{error : "Arrival Date cannot be less than departure time"};   
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flights = await this.flightRepository.createFlight({
                ...data,
                totalSeats : airplane.capacity
            });
            return flights;
        } catch (error) {
            console.log("something went wrong at service Layer of flight service");
            throw {error};
        }
    }

    async getFlight(flightId){
        //todo
        try {
            const flights = await this.flightRepository.getFlight(flightId);
            return flights;
        } catch (error) {
            console.log("something went wrong at service Layer of flight service");
            throw {error};
        }
    }

    async getAllFlights(data){
        try {
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("something went wrong at service Layer of flight service");
            throw {error};
        }
    }

    async deleteFlight(flightId){
        try {
            const response = await this.flightRepository.deleteFlight(flightId);
            return response;
        } catch (error) {
            console.log("something went wrong at service Layer of flight service");
            throw {error};
        }
    }

    async updateFight(flightId, data){
        try {
            const flights = await this.flightRepository.updateFlight(flightId,data);
            return flights;
        } catch (error) {
            console.log("something went wrong at service Layer of flight service");
            throw {error};
        }
    }

}

module.exports = FlightService;