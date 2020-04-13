const mongoose = require('mongoose');
const {Schema} = mongoose;

const Data = new Schema({
    
   artimg: String,
   arttext: String,
   artcat: String,
   categorias: String

});

module.exports= mongoose.model('Data', Data);