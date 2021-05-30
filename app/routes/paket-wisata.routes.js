let upload = require('../config/multer.config.js');
const { authJwt } = require("../middleware");
const controller = require('../controllers/paket-wisata.controller.js');

module.exports = app => {

    var router = require("express").Router();

    router.post('/',
    [authJwt.verifyToken],
    controller.postPaketWisata
    );

    router.put('/:id',
    [authJwt.verifyToken],
    controller.updatePaketWisata
    );

    router.get('/',
    [authJwt.verifyToken],
    controller.getAllPaketWisata
    );

    router.get('/:id',
    [authJwt.verifyToken],
    controller.getByIdPaketWisata
    );

    router.delete("/:id",
    [authJwt.verifyToken], 
    controller.deletePaketWisata);
    
    app.use('/api/paket-wisata', router);
};