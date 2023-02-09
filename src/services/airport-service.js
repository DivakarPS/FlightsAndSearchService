const {AirportRepository} = require('../repository/index');

// const airportRepository = new AirportRepository();
class AirportService {
    constructor(){
        this.airportRepository = new AirportRepository();
    }
    async createAirport(data){
        try {
            const airports = await this.airportRepository.createAirport(data);
        } catch (error) {
            console.log("Error in service layer of Airport");
            throw {error};
        }
    }

    async deleteAirport(airportId){
        try {
            const airport = await this.airportRepository.deleteAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Error in service layer of Airport");
            throw {error};
        }
    }

    async updateAirport(airportId,data){
        try {
            const airport = await this.airportRepository.updateAirport(airportId,data);
            return airport
        } catch (error) {
            console.log("Error in service layer of Airport");
            throw {error};
        }
    }

    async getAirport(airportId){
        try {
            const airport = await this.airportRepository.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Error in service layer of Airport");
            throw {error};
        }
    }
    
    async getCityAirports(cityId){
        try {
            const airport =  await this.airportRepository.getCityAirports(cityId);
            // console.log("from service",airport);
            return airport;
        } catch (error) {
            console.log("Error in service layer of Airport");
            throw {error};
        }
    }
}

module.exports = AirportService;