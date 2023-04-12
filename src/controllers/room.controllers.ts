import { Request, Response } from "express";
import Rooms from "../models/Rooms";
import Room from "../models/Room";

export const createRoom = (req: Request, res: Response) => {
  try {
    let { size, owner } = req.body;
    let id = Rooms.createRoom(new Room(owner, size));

    res.status(201).end(id);
  } catch (e) {
    res.status(404).end((e as Error).message);
  }
};

export const deleteRoom = (req: Request, res: Response) => {
  try {
    let { roomId } = req.body;
    Rooms.deleteRoom(roomId);

    res.status(201).end(`Successfully deleted room #${roomId}`);
  } catch (e) {
    res.status(404).end((e as Error).message);
  }
};

export const removePlayer = (req: Request, res: Response) => {
  try {
    let { roomId, playerId } = req.body;
    Rooms.removePlayer(roomId, playerId);

    res
      .status(201)
      .end(`Successfully removed player #${playerId} from room #${roomId}`);
  } catch (e) {
    res.status(404).end((e as Error).message);
  }
};

export const togglePlayerStatus = (req: Request, res: Response) => {
  try {
    let { playerId } = req.body;
    Rooms.togglePlayerStatus(playerId);

    res.status(201).end(`Player's ${playerId} status toggled`);
  } catch (e) {
    res.status(404).end((e as Error).message);
  }
};
