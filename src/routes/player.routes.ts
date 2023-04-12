import { Router } from "express";
import {
  createPlayer,
  deletePlayer,
  joinRoom,
  renamePlayer,
} from "../controllers/player.controller";

const playerRoutes = Router();

playerRoutes.post("/create-player", createPlayer);
playerRoutes.delete("/delete-player", deletePlayer);
playerRoutes.patch("/rename-player", renamePlayer);
playerRoutes.post("/join-room", joinRoom);

export default playerRoutes;
