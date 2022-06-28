const mongoose = require('mongoose');


const SongSchema = ({ 
 
    SongName : {
        type: 'string',
        required: true
    },
    DateOfRelease : {
        type: 'date', 
        required: true
    },
    Artwork : {
        type:  'string', 
        required: true
    },
    Artist : {
        type: 'string',
        required: true
    },
    Rating: {
        type: 'number', 
        required: true
    }

})
 const Songs =  mongoose.model('Songs',SongSchema);
 module.exports = Songs;