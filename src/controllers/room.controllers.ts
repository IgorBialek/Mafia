import { Request, Response } from "express";
import Room from "../models/Room";
import { players } from "./player.controller";

export let rooms = new Map<string, Room>();

export const getRooms = (req: Request, res: Response) => {
  try {
    res.status(201).end(rooms);
  } catch (e) {
    res.status(404).end((e as Error).message);
  }
};

export const createRoom = (req: Request, res: Response) => {
  try {
    let { size, ownerId } = req.body;

    let owner = players.get(ownerId)!;
    let room = new Room(owner, size);

    rooms.set(room.id, room);

    res.status(201).end(room.id);
  } catch (e) {
    res.status(404).end((e as Error).message);
  }
};

export const deleteRoom = (req: Request, res: Response) => {
  try {
    let { roomId } = req.body;
    let room = rooms.get(roomId)!;

    room.delete();

    res.status(201).end(`Successfully deleted room #${roomId}`);
  } catch (e) {
    res.status(404).end((e as Error).message);
  }
};

export const addPlayer = (req: Request, res: Response) => {
  try {
    let { roomId, playerId } = req.body;
    let player = players.get(playerId)!;
    let room = rooms.get(roomId)!;

    room.addPlayer(player);

    res
      .status(201)
      .end(`Successfully removed player #${playerId} from room #${roomId}`);
  } catch (e) {
    res.status(404).end((e as Error).message);
  }
};

export const removePlayer = (req: Request, res: Response) => {
  try {
    let { roomId, playerId } = req.body;
    let player = players.get(playerId)!;
    let room = rooms.get(roomId)!;

    room.removePlayer(player);

    res
      .status(201)
      .end(`Successfully removed player #${playerId} from room #${roomId}`);
  } catch (e) {
    res.status(404).end((e as Error).message);
  }
};
