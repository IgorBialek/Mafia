import { Request, Response } from "express";
import Players from "../models/Players";
import Player from "../models/Player";

export const createPlayer = (req: Request, res: Response) => {
  try {
    let { name } = req.body;
    let id = Players.createPlayer(new Player(name));

    res.status(201).end(id);
  } catch (e) {
    res.status(404).end((e as Error).message);
  }
};

export const deletePlayer = (req: Request, res: Response) => {
  try {
    let { playerId } = req.body;
    let id = Players.deletePlayer(playerId);

    res.status(201).end(id);
  } catch (e) {
    res.status(404).end((e as Error).message);
  }
};

export const renamePlayer = (req: Request, res: Response) => {
  try {
    let { playerId, newName } = req.body;
    Players.renamePlayer(playerId, newName);

    res.status(201).end(`Player ${playerId} name changed to ${newName}`);
  } catch (e) {
    res.status(404).end((e as Error).message);
  }
};

export const joinRoom = (req: Request, res: Response) => {
  try {
    let { playerId, roomId } = req.body;
    Players.joinRoom(playerId, roomId);

    res.status(201).end(`Player ${playerId} joined ${roomId}`);
  } catch (e) {
    res.status(404).end((e as Error).message);
  }
};
