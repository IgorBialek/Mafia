import { randomUUID } from "crypto";

import { pool } from "../config/database";

export default class Player {
  static async createPlayer(username: string, roomUUID: string) {
    let playerUUID = randomUUID();

    const playerInsertQuery = `
        INSERT INTO players (uuid, username, ready, room_uuid)
        VALUES ($1, $2, 'false', $3)
    `;

    const { rowCount: playerInserted } = await pool.query(playerInsertQuery, [
      playerUUID,
      username,
      roomUUID,
    ]);

    if (playerInserted !== 1) {
      throw new Error("Failed to create player");
    }

    return { playerUUID };
  }
}
