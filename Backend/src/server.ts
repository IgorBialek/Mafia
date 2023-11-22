import bodyParser from "body-parser";
import Dotenv from "dotenv";
import express, { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

import { playerRoutes } from "./routes/player.routes";
import { roomRoutes } from "./routes/room.routes";

Dotenv.config();

const prisma = new PrismaClient();

export const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello World :)!");
});

app.use("/room", roomRoutes);
app.use("/player", playerRoutes);

process.on("beforeExit", async () => {
  await prisma.$disconnect();
  console.log("Prisma Client disconnected");
});

app.listen(port, async () => {
  console.log(`Running: ${process.env.ENVIROMENT}`);
  console.log(`Application started on port ${port}!`);
});
