const {AirplaneService} = require('../services/index');

const airplaneService = new AirplaneService();
const update = async (req , res) => {
    try {
        const airplane = await airplaneService.updateAirplane(req.params.id,req.body);
        return res.status(200).json({
            data : airplane,
            message : 'Successfully updated the airplane',
            success : true,
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            message : 'Error in updating the airplane',
            success : false,
            err : error
        });
    }
}

const create = async (req , res) => {
    try {
        const airplane = await airplaneService.createAirplane(req.body);
        return res.status(200).json({
            data : airplane,
            message : 'Successfully created the airplane',
            success : true,
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            message : 'Error in creating the airplane',
            success : false,
            err : error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const airplane = await airplaneService.deleteAirplane(req.params.id);
        return res.status(200).json({
            data : airplane,
            message : 'Successfully delted the airplane',
            success : true,
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            data : {},
            message : 'Not able to delete the airplane',
            success : true,
            err : error
        });
    }
}

const get = async (req, res) => {
    try {
        const airplane = await airplaneService.getAirplane(req.params.id);
        return res.status(200).json({
            data : airplane,
            message : 'Successfully Fetched the airplane',
            success : true,
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            data : {},
            message : 'Not able to Fetch the airplane',
            success : true,
            err : error
        });
    }
}

module.exports = {
    update,
    create,
    destroy,
    get
}