const express = require('express');
const  router = express.Router();
const Songs = require('../../models/SongsSchema')


router.get('/', async (req, res) => {
   const user = await Songs.find();
   res.status(200).json({message: user})
})

router.post('/', async (req, res) => {
    try {
        const { SongName,DateOfRelease,Artwork, Artist,Rating} = req.body;
       const user = new Songs({SongName,DateOfRelease,Artwork, Artist, Rating})
       await user.save();
       res.status(200).json({message: 'data store in dataBase', user})
    }
    catch (err) {
        res.status(400).json({message: err.message})

    }
})

module.exports = router;