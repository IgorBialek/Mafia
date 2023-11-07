import bodyParser from "body-parser";
import Dotenv from "dotenv";
import express, { Request, Response } from "express";

import { configureDatabase } from "./config/database";
import { roomRoutes } from "./routes/room.routes";

export const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

Dotenv.config();

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello World :)!");
});

app.use(roomRoutes);

app.listen(port, async () => {
  console.log(`Running: ${process.env.NODE_ENV}`);
  console.log(`Application started on port ${port}!`);

  await configureDatabase();
});
