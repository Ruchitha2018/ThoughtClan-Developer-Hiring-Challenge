const mongoose = require("mongoose");

const hotelsSchema = new mongoose.Schema(
    {
        id: {
            type: Number
        },
         name: {
            type: String
        },
         host_name: {
            type: String
        },
        neighbourhood_group: {
            type: String
        }, 
        neighbourhood: {
            type: String
        },
        latitude:{
            type: Number
        },
        longitude:{
           type: Number    
        },
        room_type: {
            type: String
        },
        price:{
            type: Number
        }
    },
);

module.exports = mongoose.model("hotel_listings", hotelsSchema);
