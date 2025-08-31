import express from "express";
import cors from "cors";
import { createUser } from "./routes/userRoutes";
const router = express.Router();

const app = express();

app.use(cors());

app.use(router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/create-user", createUser);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
