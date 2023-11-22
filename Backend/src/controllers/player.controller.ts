import { Request, Response } from "express";

import Player from "../models/Player";

export const joinRoom = async (req: Request, res: Response) => {
  let { username, roomID } = req.body;

  try {
    if (!username || !roomID) {
      throw new Error("Please provide a username and room ID");
    }

    let { playerID } = await Player.createPlayer(username, roomID);

    res.send({
      message: "Successfully joined room",
      playerID,
      error: false,
    });
  } catch (e) {
    console.log(e);
    res.status(400).send({ message: (e as Error).message, error: true });
  }
};
