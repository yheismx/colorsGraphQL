const mongoose = require('mongoose');


const ColorsSchema = mongoose.Schema({
    name: {
        type: String,
        
    },
    hex: {
        type: String,
       
    },
    rgb: {
        type: [String],
        
    }
  

});


module.exports = mongoose.model('Color', ColorsSchema);