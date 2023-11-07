import { randomUUID } from "crypto";

import { pool } from "../config/database";
import Player from "./Player";

export default class Room {
  static async createRoom(
    username: string,
    roomName: string,
    roomSize: number
  ) {
    let roomUUID = randomUUID();

    const { playerUUID } = await Player.createPlayer(username, roomUUID);

    const roomInsertQuery = `
        INSERT INTO rooms (uuid, size, name, owner)
        VALUES ($1, $2, $3, $4)
    `;

    const { rowCount: roomInserted } = await pool.query(roomInsertQuery, [
      roomUUID,
      roomSize,
      roomName,
      playerUUID,
    ]);

    if (roomInserted !== 1) {
      throw new Error("Failed to create room");
    }

    return { playerUUID, roomUUID };
  }
}
