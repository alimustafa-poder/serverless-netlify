import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import serverless from "serverless-http";

dotenv.config();

const app = express();
const router = express.Router();

app.use(router);
router.use(morgan("dev"));

router.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

router.get("/test", (req, res) => {
  res.status(200).send("This is a test route.");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});

exports.handler = serverless(app);
