import express from "express";
import methodOverride from "method-override";
import exphbs from "express-handlebars";
import route from "./routes/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import initial from "./initial.js";
import db from "./config/db/index.js";
import path from "path";
import morgan from "morgan"; // Import module morgan
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { config } from "dotenv";
config({ path: "./.env" });

const app = express();
const port = 3001;
app.use(cookieParser());
db.connect();
// app.use(
//   require("express-session")({
//     secret: env.JSON_WEB_TOKEN_HIDEN,
//     saveUninitialized: false,
//     cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
//   })
// );
// Use static folder
app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

app.use(methodOverride("_method"));

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  exphbs.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
initial();

// Routes init
route(app);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
