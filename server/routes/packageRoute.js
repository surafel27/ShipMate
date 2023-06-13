const express = require("express");
const packageControllor = require("../controllors/packageControllor.js")
const router = express.Router();

router.post('/addPackage', packageControllor.addPackage);

router.get('/packages', packageControllor.getPackages);
router.get('/:packageId', packageControllor.singlePackage);
router.get('/mypackage', packageControllor.myPackage);

router.put('/pdatePackage', packageControllor.updatePackage);


module.exports = router;