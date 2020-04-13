const mongoose = require('mongoose');
const {Schema} = mongoose;

const Data = new Schema({
    
   artimg: String,
   arttext: String,
   articulo: String,
   categorias: String,
   msgnombre: String,
   msgmail: String,
   msgcel: String,
   msgtext: String


});

module.exports= mongoose.model('Data', Data);