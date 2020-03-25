var express = require('express');
let User = require("../models/user.model");
let Contacts = require("../models/contacts.model");
var router = express.Router();

/* GET users listing. */
router.route("/all").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/testadd").get((req, res) => {
  const telnumber = '776359893';
  const hashnumber = 'req.body.hashnumber';
  const cni = '1633xxx';
  const deviceid = 'xyxvehjkjhsfkjhsf';

  const debutsejour =new Date();
  const finsejour = new Date();
  finsejour.setMinutes ( debutsejour.getMinutes() + 15 );
  const coord = {
    latitude: '14.6937000',
    longitude: '-17.4440600',
    altitude: '0'
  }
  const etat = 0;
  const description = '';
  const newUser = new User({telnumber,hashnumber,cni,deviceid,debutsejour,finsejour,coord,etat,description});
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/addposition").post((req, res) => {
  const telnumber = req.body.telnumber;
  const hashnumber = req.body.hashnumber;
  const cni = req.body.cni;
  const deviceid = req.body.deviceid;

  const debutsejour = req.body.debutsejour;
  const finsejour = req.body.finsejour;
  const coord = req.body.coord;
  const etat = req.body.etat;
  const description = req.body.description;
  const newUser = new User({telnumber,hashnumber,cni,deviceid,debutsejour,finsejour,coord,etat,description});
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:telnumber").get((req, res) => {
  console.log('Adding time: ' + req.params.telnumber);
  User.find({ telnumber: req.params.telnumber})
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});



module.exports = router;
