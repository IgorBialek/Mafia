import { randomUUID } from "crypto";
import Player from "./Player";
import { onValue, ref, set } from "firebase/database";
import { database } from "../config/firebase";
import Rooms from "./Rooms";

export default class Players {
  static players: { [id: string]: Player } = {};

  static createPlayer(player: Player) {
    let id = randomUUID();

    set(ref(database, "players/" + id), player);

    return id;
  }

  static deletePlayer(playerId: string) {
    let player = this.players[playerId];

    if (player.roomId) {
      Rooms.removePlayer(player.roomId, playerId);
    }

    set(ref(database, "players/" + playerId), null);

    return playerId;
  }

  static removeRoom(playerId: string) {
    let player = this.players[playerId];

    player.roomId = "";
    set(ref(database, "players/" + playerId), player);

    return playerId;
  }

  static renamePlayer(playerId: string, newName: string) {
    set(ref(database, "players/" + playerId), {
      ...this.players[playerId],
      name: newName,
    });
  }

  static joinRoom(playerId: string, roomId: string) {
    let player = this.players[playerId];

    if (!player.roomId && Rooms.addPlayer(roomId, playerId)) {
      set(ref(database, "players/" + playerId), {
        ...player,
        roomId,
      });
    }
  }

  static observe() {
    const playersRef = ref(database, "players/");
    onValue(playersRef, (snapshot) => {
      this.players = snapshot.val();
      console.log(this.players);
    });
  }
}
