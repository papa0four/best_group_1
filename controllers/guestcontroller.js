import mongoose from "mongoose";
import { guestSchema } from "../models/guestmodel";

const guest = mongoose.model("guest", guestSchema);

export const addnewguest = (req, res) => {
  let newguest = new guest(req.body);

  newguest.save((err, guest) => {
    if (err) {
      res.send(err);
    }
    res.json(guest);
  });
};

export const getguest = (req, res) => {
  guest.find({}, (err, guest) => {
    if (err) {
      res.send(err);
    }
    res.json(guest);
  });
};

export const getguestWithID = (req, res) => {
  guest.findById(req.params.guestID, (err, guest) => {
    if (err) {
      res.send(err);
    }
    res.json(guest);
  });
};

export const updateguest = (req, res) => {
  guest.findOneAndUpdate(
    { _id: req.params.guestID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, guest) => {
      if (err) {
        res.send(err);
      }
      res.json(guest);
    }
  );
};

export const deleteguest = (req, res) => {
  guest.remove({ _id: req.params.guestID }, (err, guest) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "successfuly deleted guest" });
  });
};
