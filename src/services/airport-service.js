const {AirportRepository} = require('../repository/index');

// const airportRepository = new AirportRepository();
class AirportService {
    constructor(){
        this.AirportService = new AirportRepository();
    }
    async createAirport(data){
        try {
            const airports = await this.AirportService.createAirport(data);
        } catch (error) {
            console.log("Error in service layer of Airport");
            throw {error};
        }
    }

    async deleteAirport(airportId){
        try {
            const airport = await this.AirportService.deleteAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Error in service layer of Airport");
            throw {error};
        }
    }

    async updateAirport(airportId,data){
        try {
            const airport = await this.AirportService.updateAirport(airportId,data);
            return airport
        } catch (error) {
            console.log("Error in service layer of Airport");
            throw {error};
        }
    }

    async getAirport(airportId){
        try {
            const airport = await this.AirportService.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Error in service layer of Airport");
            throw {error};
        }
    }
    
    async getCityAirports(cityId){
        try {
            const airport =  await this.AirportService.getCityAirports(cityId);
            return airport;
        } catch (error) {
            console.log("Error in service layer of Airport");
            throw {error};
        }
    }
}

module.exports = AirportService;