const { Model } = require('sequelize');
const {Airplane} = require('../models/index');

class AirplaneRepository{
    async getAirplane(id){
        try {
            const airplane =await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Error in repository layer of airplane");
            throw{error};
        }
    }

    async deleteAirplane(airplaneId){
        try {
            const response = await Airplane.destroy({
                where : {
                    id : airplaneId
                }
            });
            return response;
        } catch (error) {
            console.log("Error in repository layer of airplane");
            throw{error};
        }
    }

    async createAirplane(data){
        try {
            const airplane = await Airplane.create(data);
            return airplane;
        } catch (error) {
            console.log("Error in repository layer of airplane");
            throw{error};
        }
    }

    async updateAirplane(airplaneId , data){
        try {
            // const airplane = await Airplane.findByPk(airplaneId);
            // airplane.modelNumber = data.modelNumber;
            // airplane.capacity=data.capacity;
            // await airplane.save();
            const airplane = await Airplane.update(data, {
                where : {
                    id : airplaneId
                }
            });
            return airplane;
        } catch (error) {
            console.log("Error in repository layer of airplane");
            throw{error};
        }
    }
}

module.exports = AirplaneRepository;