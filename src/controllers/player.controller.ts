import { Request, Response } from "express";
import Player from "../models/Player";
import { rooms } from "./room.controllers";

export let players = new Map<string, Player>();

export const getPlayers = (req: Request, res: Response) => {
  try {
    res.status(201).end(players);
  } catch (e) {
    res.status(404).end((e as Error).message);
  }
};

export const createPlayer = (req: Request, res: Response) => {
  try {
    let { name } = req.body;
    let player = new Player(name);

    res.status(201).end(player.id);
  } catch (e) {
    res.status(404).end((e as Error).message);
  }
};

export const deletePlayer = (req: Request, res: Response) => {
  try {
    let { playerId } = req.body;
    let player = players.get(playerId)!;

    player.delete();

    res.status(201).end(player.id);
  } catch (e) {
    res.status(404).end((e as Error).message);
  }
};

export const renamePlayer = (req: Request, res: Response) => {
  try {
    let { playerId, newName } = req.body;
    let player = players.get(playerId)!;

    player.rename(newName);

    res.status(201).end(`Player ${playerId} name changed to ${newName}`);
  } catch (e) {
    res.status(404).end((e as Error).message);
  }
};

export const toggleReadiness = (req: Request, res: Response) => {
  try {
    let { playerId, roomId } = req.body;
    let player = players.get(playerId)!;
    let room = rooms.get(roomId)!;

    player.toggleReadiness();

    if (room.players.every((p) => p.isReady)) {
      console.log(`All players in room ${roomId} are ready`);
      room.createGame();
    }

    res
      .status(201)
      .end(`Toggled readiness to "${player.isReady}" of player #${playerId}`);
  } catch (e) {
    res.status(404).end((e as Error).message);
  }
};

export const voteAsMafia = (req: Request, res: Response) => {
  try {
    let { playerId, roomId } = req.body;
    let player = players.get(playerId)!;
    let room = rooms.get(roomId)!;

    player.toggleReadiness();

    if (room.players.every((p) => p.isReady)) {
      room.createGame();
    }

    res
      .status(201)
      .end(`Toggled readiness to "${player.isReady}" of player #${playerId}`);
  } catch (e) {
    res.status(404).end((e as Error).message);
  }
};
