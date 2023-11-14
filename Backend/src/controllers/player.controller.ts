import { Request, Response } from "express";

import Player from "../models/Player";

export const joinRoom = async (req: Request, res: Response) => {
  let { username, roomUUID } = req.body;

  try {
    if (!username || !roomUUID) {
      throw new Error("Please provide a username and room UUID");
    }

    let { playerUUID } = await Player.createPlayer(username, roomUUID);

    res.send({
      message: "Successfully joined room",
      playerUUID,
      error: false,
    });
  } catch (e) {
    console.log(e);
    res.status(400).send({ message: (e as Error).message, error: true });
  }
};
