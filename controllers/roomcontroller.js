import mongoose from "mongoose";
import { roomSchema } from "../models/roommodel";

const room = mongoose.model("room", roomSchema);

export const addnewroom = (req, res) => {
  let newroom = new room(req.body);

  newroom.save((err, room) => {
    if (err) {
      res.send(err);
    }
    res.json(room);
  });
};

export const getroom = (req, res) => {
  room.find({}, (err, room) => {
    if (err) {
      res.send(err);
    }
    res.json(room);
  });
};

export const getroomWithID = (req, res) => {
  room.findById(req.params.roomID, (err, room) => {
    if (err) {
      res.send(err);
    }
    res.json(room);
  });
};

export const updateroom = (req, res) => {
  room.findOneAndUpdate(
    { _id: req.params.roomID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, room) => {
      if (err) {
        res.send(err);
      }
      res.json(room);
    }
  );
};

export const deleteroom = (req, res) => {
  room.remove({ _id: req.params.roomID }, (err, room) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "successfuly deleted room" });
  });
};
