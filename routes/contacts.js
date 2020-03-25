var express = require("express");
let Contacts = require("../models/contacts.model");
var router = express.Router();


/* GET users listing. */
router.route("/all").get((req, res) => {
  Contacts.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/addcontact").post((req, res) => {
  const telnumber1 = req.body.telnumber1;
  const telnumber2 = req.body.telnumber2;
  const deviceid1 = req.body.deviceid1;
  const deviceid2 = req.body.deviceid2;
  const newContact = new Contacts({ telnumber1, telnumber2, deviceid1,deviceid2 });
  newContact
    .save()
    .then(() => res.json("Contact ajouté"))
    .catch(err => res.status(400).json("Error: " + err));
});


router.route("/addcontact1").get((req, res) => {
  console.log('Adding time: ' + JSON.stringify(req.body));
  const telnumber1 = '776359893';
  const telnumber2 = '770963456';
  const deviceid1 = 'req.body.deviceid1';
  const deviceid2 = 'req.body.deviceid2';
  const newContact = new Contacts({ telnumber1, telnumber2, deviceid1,deviceid2 });
  newContact.save().then(() => res.json("Contact ajouté"))
    .catch(err => res.status(400).json("Error: " + err));
});


router.route("/:telnumber").get((req, res) => {
  Contacts.find().or([{ telnumber1: req.params.telnumber}, {telnumber2: req.params.telnumber}])
    .then(contact => res.json(contact))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Contacts.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
