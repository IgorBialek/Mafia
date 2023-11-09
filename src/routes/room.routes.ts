import { Router } from "express";

import { createRoom, searchRooms } from "../controllers/room.controller";

const roomRoutes = Router();

roomRoutes.post("/create", createRoom);
roomRoutes.post("/search", searchRooms);

export { roomRoutes };
