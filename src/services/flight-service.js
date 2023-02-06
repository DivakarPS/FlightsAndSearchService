const {AirplaneRepository, FlightRepository} = require('../repository/index');

class FlightService {

    constructor(){
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data){
        try {
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

    async getFlightData(){
        //todo
    }

}

module.exports = FlightService;