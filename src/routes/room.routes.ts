import { Router } from "express";

import { createRoom } from "../controllers/room.controller";

const roomRoutes = Router();

roomRoutes.post("/create-room", createRoom);

export { roomRoutes };
