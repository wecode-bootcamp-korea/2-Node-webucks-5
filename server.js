import express from "express";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());  // post request body parser
app.use(router);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running on ${PORT}`);
  } else {
    console.log(err);
  }
});
