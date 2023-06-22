const express = require("express");
const packageControllor = require("../controllors/packageControllor.js")
const router = express.Router();

router.post('/addPackage', packageControllor.addPackage);

router.get('/packages', packageControllor.getPackages);
router.get('/:packageId', packageControllor.singlePackage);
router.get('/my_packages', packageControllor.myPackage);


router.delete('/:packageId', packageControllor.deletePackage);
router.put('/:packageId', packageControllor.updatePackage);


module.exports = router;