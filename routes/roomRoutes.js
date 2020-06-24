import {
  addnewroom,
  getrooms,
  getroomWithID,
  updateroom,
  deleteroom,
} from "../controllers/roomcontroller";

const routes = (app) => {
  app
    .route("/room")
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getrooms)

    // Post endpoint
    .post(addnewroom);

  app
    .route("/room/:roomID")
    // get a specific room
    .get(getroomWithID)

    // updating a specific room
    .put(updateroom)

    // deleting a specific room
    .delete(deleteroom);
};

export default routes;
