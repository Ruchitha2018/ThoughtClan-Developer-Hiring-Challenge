const Hotel = require("../models/hotels");

exports.listHotels = (req, res) => {
    Hotel.find().exec((err, data) => {
       if(err || !data){
           return res.status(400).json({err});
       }
        return res.json(data);
    });
}
