import express from "express";
import { Request, Response } from "express";
import Dotenv from "dotenv";
import bodyParser from "body-parser";
import { configureFirebase } from "./config/firebase";
import roomRouter from "./routes/room.routes";
import playerRoutes from "./routes/player.routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

Dotenv.config();
configureFirebase();

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

app.use(playerRoutes);
app.use(roomRouter);

app.listen(3000, () => {
  console.log("Application started on port 3000!");
});
