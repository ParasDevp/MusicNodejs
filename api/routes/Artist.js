const express = require('express');
const  router = express.Router();
const Artist = require('../../models/ArtistSchema')


router.get('/', async (req, res) => {
   const user = await Artist.find();
   res.status(200).json({message: user})
})

router.post('/', async (req, res) => {
    try {
        const { ArtistName,dateOfbirth,Bio, Songs} = req.body;
       const user = new Artist({ArtistName,dateOfbirth,Bio,Songs})
       await user.save();
       res.status(200).json({message: 'data store in dataBase', user})
    }
    catch (err) {
        res.status(400).json({message: err.message})

    }
})

module.exports = router;