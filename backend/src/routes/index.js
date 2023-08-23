import apiRouter from "./api.js";
import homeRouter from "./home.js";
import authrouter from "./auth.js";
function route(app) {
  app.use("/api", apiRouter);
  app.use("/auth", authrouter);
  app.use("/", homeRouter);
}

export default route;
