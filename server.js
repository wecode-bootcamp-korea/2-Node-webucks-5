import express from "express";
import dotenv from "dotenv";
import router from "./routes";
// import http from "http";

dotenv.config();

const app = express();
const PORT = 8000 | process.env.PORT;

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

// const server = http.createServer(app);

// const start = async () => {
//   try {
//     server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
//   } catch (err) {
//     console.log(err);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// start();
