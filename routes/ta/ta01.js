const express = require('express');
const fs = require('fs'); // File system for TA01
const router = express.Router();
const ta01Controller = require("../../controllers/ta/taC01");
// Remember Team Activity 01? 
// This is the same solution, but implemented in our app using 
// proper routing for the view engine

const activities = ['soccer', "basketball", "football", "swimming"];
router.get('/', ta01Controller.getTa01);

// CORE CHALLENGE 2 -
router.get('/activities', ta01Controller.getCoreChallenge2);

// CORE CHALLENGE 3 -
router.post('/add-activity', ta01Controller.getCoreChallenge3);

/***************************************************************************
* STRETCH CHALLENGE SOLUTIONS
* These are the solutions for the stretch challenges.
***************************************************************************/
// STRETCH CHALLENGE 1 - Add CSS.
router.get("/stretch-1", ta01Controller.getSC1);

// STRETCH CHALLENGE 2 - Write to file.
router.get("/stretch-2", ta01Controller.getSC2);
// The url can be identical.
router.post("/stretch-2", ta01Controller.postSC2);

// STRETCH CHALLENGE 3 - Add two numbers...
router.get("/stretch-3", ta01Controller.getSC3);

router.post("/stretch-3", ta01Controller.postSC3);
module.exports = router;