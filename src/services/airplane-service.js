const {AirplaneRepository} = require('../repository/index');

class AirplaneService {
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
    }

    async updateAirplane(airplaneId, data){
        try {
            const airplane = await this.airplaneRepository.updateAirplane(airplaneId,data);
            return airplane;
        } catch (error) {
            console.log('Something went wrong int service layer of airplane');
            throw error;
        }
    }

    async createAirplane(data){
        try {
            const airplane = await this.airplaneRepository.createAirplane(data);
            return airplane;
        } catch (error) {
            console.log('Something went wrong int service layer of airplane');
            throw error;
        }
    }

    async deleteAirplane(data){
        try {
            const response = await this.airplaneRepository.deleteAirplane(data);
            return response;
        } catch (error) {
            console.log('Something went wrong int service layer of airplane');
            throw error;
        }
    }

    async getAirplane(airplaneId, data){
        try {
            const airplane = await this.airplaneRepository.getAirplane(airplaneId,data);
            return airplane;
        } catch (error) {
            console.log('Something went wrong int service layer of airplane');
            throw error;
        }
    }
}

module.exports = AirplaneService;