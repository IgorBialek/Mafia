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

export const joinRoom = async (req: Request, res: Response) => {
  let { username, roomUUID } = req.body;
};
