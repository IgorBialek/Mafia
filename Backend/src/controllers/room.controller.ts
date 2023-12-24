import { Request, Response } from 'express';

import Player from '../models/Player';
import Room from '../models/Room';

export const createRoom = async (req: Request, res: Response) => {
  let { username, roomName, roomSize, isPrivate } = req.body;

  try {
    if (!username || !roomName || !roomSize) {
      throw new Error("Please provide a username, room name, and room size");
    }

    if (roomSize < 0 || roomSize > 16) {
      throw new Error("Room size must be between 0 and 16");
    }

    let { roomID } = await Room.createRoom(roomName, roomSize, isPrivate);

    let { playerID } = await Player.createPlayer(username, roomID, true);

    res.send({
      message: "Successfully created room",
      roomID,
      playerID,
      error: false,
    });
  } catch (e) {
    console.log(e);
    res.status(400).send({ message: (e as Error).message, error: true });
  }
};

export const searchRooms = async (req: Request, res: Response) => {
  let { query } = req.body;

  try {
    if (!query) {
      throw new Error("Please provide a query");
    }

    let rooms = await Room.getByQuery(query);

    res.send({ message: "Successfully searched rooms", rooms, error: false });
  } catch (e) {
    console.log(e);
    res.status(400).send({ message: (e as Error).message, error: true });
  }
};
