import { Router } from "express";
import {
  createRoom,
  deleteRoom,
  removePlayer,
  togglePlayerStatus,
} from "../controllers/room.controllers";

const roomRouter = Router();

roomRouter.post("/create-room", createRoom);
roomRouter.patch("/toggle-status", togglePlayerStatus);
roomRouter.delete("/delete-room", deleteRoom);
roomRouter.patch("/remove-player", removePlayer);

export default roomRouter;
