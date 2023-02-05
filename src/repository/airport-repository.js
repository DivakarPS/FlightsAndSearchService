const {Airport} = require('../models/index');


class AirportRepository {

    async createAirport(data){
        try {
            const airport = await Airport.create(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in repository layer of Airport");
            throw{error};
        }
    }
    async deleteAirport(data){
        try {
            const airport = await Airport.destroy(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in repository layer of Airport");
            throw{error};
        }
    }

}