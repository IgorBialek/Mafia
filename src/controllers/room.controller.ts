import { Request, Response } from "express";

import { pool } from "../config/database";
import Room from "../models/Room";

export const createRoom = async (req: Request, res: Response) => {
  let { username, roomName, roomSize } = req.body;
  const client = await pool.connect();

  try {
    if (!username || !roomName || !roomSize) {
      throw new Error("Please provide a username, room name, and room size");
    }

    if (roomSize < 0 || roomSize > 16) {
      throw new Error("Room size must be between 0 and 16");
    }

    await client.query("BEGIN");

    let { playerUUID, roomUUID } = await Room.createRoom(
      username,
      roomName,
      roomSize
    );

    await client.query("COMMIT");

    res.send({
      message: "Successfully created room",
      playerUUID,
      roomUUID,
      error: false,
    });
  } catch (e) {
    await client.query("ROLLBACK");
    console.log(e);
    res.status(404).send({ message: (e as Error).message, error: true });
  } finally {
    client.release();
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
    res.status(404).send({ message: (e as Error).message, error: true });
  }
};
