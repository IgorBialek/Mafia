import { onValue, ref, set } from "firebase/database";
import Room from "./Room";
import { database } from "../config/firebase";
import { randomUUID } from "crypto";
import Players from "./Players";
import Game from "./Game";
import Games from "./Games";

export default class Rooms {
  static rooms: { [id: string]: Room } = {};

  static createRoom(room: Room) {
    let id = randomUUID();

    set(ref(database, "rooms/" + id), room);
    Players.joinRoom(room.owner, id);

    return id;
  }

  static deleteRoom(roomId: string) {
    set(ref(database, "rooms/" + roomId), null);
  }

  //Returns if player can be added
  static addPlayer(roomId: string, playerId: string) {
    let room = this.rooms[roomId];

    if (Object.keys(room.players ?? {}).length >= room.size) {
      return false;
    }

    set(ref(database, "rooms/" + roomId), {
      ...room,
      players: { ...room.players, [playerId]: false },
    });

    return true;
  }

  static removePlayer(roomId: string, playerId: string) {
    let room = this.rooms[roomId];
    let owner = room.owner;

    if (Object.keys(room.players ?? {}).length <= 1) {
      this.deleteRoom(roomId);
      return;
    }

    if (playerId === room.owner) {
      owner = Object.keys(room.players ?? {}).find((p) => p !== playerId)!;
    }

    room.owner = owner;
    delete room.players[playerId];
    set(ref(database, "rooms/" + roomId), room);

    Players.removeRoom(playerId);
  }

  static togglePlayerStatus(playerId: string) {
    let player = Players.players[playerId];
    let room = this.rooms[player.roomId];

    if (player.roomId) {
      room.players = { ...room.players, [playerId]: !room.players[playerId] };

      if (Object.values(room.players).every((v) => v)) {
        let newGame = new Game(player.roomId);
        let gameId = Games.createGame(newGame);
        room.game = gameId;
      }

      set(ref(database, "rooms/" + player.roomId), room);
    }
  }

  static observe() {
    const roomsRef = ref(database, "rooms/");
    onValue(roomsRef, (snapshot) => {
      this.rooms = snapshot.val();
      console.log(this.rooms);
    });
  }
}
