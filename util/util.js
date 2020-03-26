 var GeoPoint = require('geo-point');
let User = require("../models/user.model");
let Contacts = require("../models/contacts.model");
require('dotenv').config();
var CronJob = require('cron').CronJob;

var methods = {};
 methods.runCronContact=function(){
    var job = new CronJob(process.env.CRON, function (){
        debut=new Date();
        //{'computed':0},
        var numtel=[];
        User.find({'computed':0}, function (err1, users1) {
            if (err1) return handleError(err1);
    
            users1.forEach(user1 => {
                console.log(user1.telnumber);
                numtel.push(user1.telnumber); 
                const startPoint = new GeoPoint(user1.coord.latitude, user1.coord.longitude);
                User.find({telnumber: { $nin: numtel}}, function (err2, users2) {
                    if (err2) return handleError(err2);
                    users2.forEach(user2 => {
                        const endPoint = new GeoPoint(user2.coord.latitude, user2.coord.longitude);
                        distance = startPoint.calculateDistance(endPoint);
                        if(distance <= process.env.DISTANCE 
                          && !((user1.debutsejour>user2.finsejour)||(user1.finsejour<user2.debutsejour))){
                            const telnumber1 = user1.telnumber;
                            const telnumber2 = user2.telnumber;
                            const deviceid1 = user1.deviceid;
                            const deviceid2 = user2.deviceid;
                            const coord = user1.coord;
                            const datesejour = user1.debutsejour;
                            const newContact = new Contacts({ telnumber1, telnumber2, deviceid1,deviceid2,coord,datesejour});
                            newContact.save(function (err) {
                                if (err) return handleError(err);
                                console.log(distance);
                              });
                            
                        }
                        
                    });
                    
                  });
                  user1.computed=1;
                  user1.save(function (err) {
                    if (err) return handleError(err);
                    console.log(user1);
                  });
            });
            
          });
    
          return;
     });
    job.start();
 };



 exports.data = methods;








