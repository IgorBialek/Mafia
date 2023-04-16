import { Router } from "express";
import {
  addPlayer,
  createRoom,
  deleteRoom,
  getRooms,
  removePlayer,
} from "../controllers/room.controllers";

const roomRouter = Router();

roomRouter.get("/get-all-rooms", getRooms);
roomRouter.post("/create-room", createRoom);
roomRouter.delete("/delete-room", deleteRoom);
roomRouter.patch("/add-player", addPlayer);
roomRouter.patch("/remove-player", removePlayer);

export default roomRouter;
