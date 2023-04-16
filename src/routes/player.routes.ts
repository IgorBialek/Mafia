import { Router } from "express";
import {
  createPlayer,
  deletePlayer,
  getPlayers,
  renamePlayer,
  toggleReadiness,
} from "../controllers/player.controller";

const playerRoutes = Router();

playerRoutes.get("/get-all-players", getPlayers);
playerRoutes.post("/create-player", createPlayer);
playerRoutes.delete("/delete-player", deletePlayer);
playerRoutes.patch("/rename-player", renamePlayer);
playerRoutes.patch("/toggle-readiness", toggleReadiness);

export default playerRoutes;
