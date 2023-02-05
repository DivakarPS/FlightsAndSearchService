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
    async deleteAirport(airportId){
        try {
            const response = await Airport.destroy({
                where : {
                    id : airportId
                }
            });
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer of Airport");
            throw{error};
        }
    }
    
    async updateAirport(airportId,data){
        try {
            const airport = await Airport.findByPk(airportId);
            airport.name=data.name;
            airport.address=data.address;
            airport.cityId = data.cityId;
            await airport.save();
            return airport;
        } catch (error) {
            console.log("Something went wrong in repository layer of Airport");
            throw{error};
        }
    }

    async getAirport(airportId){
        try {
            const airport = await Airport.findByPk(airportId);
            console.log(airport);
            return airport;
        } catch (error) {
            console.log("Something went wrong in repository layer of Airport");
            throw{error};
        }
    }
    
    async getCityAirports(city_Id){
        try {
            const airports = await Airport.find({
                where: {
                    cityId : city_Id
                },
                attributes : ['name']
            })
            console.log(airports);
            return airports;
        } catch (error) {
            console.log("Something went wrong in repository layer of Airport");
            throw{error};
        }
    }

}

module.exports = AirportRepository;