const { ObjectId } = require('mongodb');
const mongo = require('../connect');

module.exports.createroom = async (req,res,next) => {
    try{
        const insertedResponse = await mongo.selectedDb.collection("room").insertOne(req.body);
        res.send(insertedResponse);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.getroom = async (req,res,next) => {
    try{
        const getData = await mongo.selectedDb.collection("room").aggregate ([{
            $lookup: {
               from: "bookedroom",
               localField: "RoomId",
               foreignField:"RoomId",
               as: "Room with booked Data"
            }
        }]) .toArray();
      res.send(getData);
    } catch(err) {
     console.error(err);
     res.status(500).send(err);
    }
 }
