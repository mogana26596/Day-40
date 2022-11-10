const { ObjectId } = require('mongodb');
const mongo = require('../connect');

module.exports.createbookedroom = async (req,res,next) => {
    try{
        const insertedResponse = await mongo.selectedDb.collection("bookedroom").insertOne(req.body);
        res.send(insertedResponse);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.getbookedroom = async (req,res,next) => {
    try{
        const getData = await mongo.selectedDb.collection("bookedroom").aggregate ([{
            $lookup: {
               from: "room",
               localField: "RoomId",
               foreignField:"RoomId",
               as: "Customers with booked Data"
            }
        }]) .toArray();
      res.send(getData);
    } catch(err) {
     console.error(err);
     res.status(500).send(err);
    }
 }
