import {
  addnewguest,
  getguest,
  getguestWithID,
  updateguest,
  deleteguest,
} from "../controllers/guestcontroller";

const routes = (app) => {
  app
    .route("/guest")
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getguest)

    // Post endpoint
    .post(addnewguest);

  app
    .route("/guest/:guestID")
    // get a specific guest
    .get(getguestWithID)

    // updating a specific guest
    .put(updateguest)

    // deleting a specific guest
    .delete(deleteguest);
};

export default routes;
