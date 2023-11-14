import { Router } from "express";

import { joinRoom } from "../controllers/player.controller";

const playerRoutes = Router();

playerRoutes.post("/join", joinRoom);

export { playerRoutes };
