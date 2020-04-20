const express = require("express");
const next = require("next");
const routes = require("../routes.js");
const mongoose = require("mongoose");
const path = require("path");
const compression = require("compression");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = routes.getRequestHandler(app);
const authServices = require("./services/auth");
const config = require("./config");

const bookRouter = require("./routes/book");
const portfolioRouter = require("./routes/portfolio");
const blogRouter = require("./routes/blog");

// With express

const secretData = [
  {
    title: "안녕",
    description: "저리가라 임마",
  },
  {
    title: "그래 안녕?",
    description: "너나 저리가라",
  },
];

const robotsOptions = {
  root: path.join(__dirname, "../static"),
  headers: {
    "Content-Type": "text/plain;charset=UTF-8",
  },
};
console.log(config);
mongoose
  .connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => err);

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(compression());
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    server.use("/api/v1/books", bookRouter);
    server.use("/api/v1/portfolios", portfolioRouter);
    server.use("/api/v1/blogs", blogRouter);

    server.get("/robots.txt", (req, res) => {
      return res.status(200).sendFile("robots.txt", robotsOptions);
    });

    server.get("/api/v1/secret", authServices.checkJWT, (req, res) => {
      return res.json(secretData);
    });
    server.get(
      "/api/v1/onlysiteowner",
      authServices.checkJWT,
      authServices.checkRole("siteOwner"),
      (req, res) => {
        return res.json(secretData);
      }
    );
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.use(function (err, req, res, next) {
      console.log("err", err);
      if (err.name === "UnauthorizedError") {
        res.status(401).send("invalid token...");
      }
    });
    const PORT = process.env.PORT || 3000;

    server.use(handle).listen(PORT, (err) => {
      if (err) throw err;
      console.log("Server is no on " + PORT);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
