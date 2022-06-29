const mongoose = require('mongoose')


const ArtistSchema = new mongoose.Schema({
  ArtistName  : {
    type : 'string',
    required : true,
  },
  dateOfbirth : {
    type: 'date',
    required: true,
  },
  Bio : {
    type: 'string',
  }, 
})
const Artist =  mongoose.model('Artist', ArtistSchema);
module.exports = Artist;