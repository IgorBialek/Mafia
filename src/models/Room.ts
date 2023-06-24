import { randomUUID } from "crypto";
import { MAX_ROOM_SIZE, MIN_ROOM_SIZE } from "../lib/constants";
import Game from "./Game";
import Player from "./Player";
import { ref, set } from "firebase/database";
import { database } from "../config/firebase";
import { rooms } from "../controllers/room.controllers";

export default class Room {
  public id: string = "";
  public size: number = 0;
  public players: Player[] = [];
  public owner: Player;
  public game?: Game;

  constructor(owner: Player, size: number) {
    this.id = randomUUID();
    this.owner = owner;
    this.players.push(owner);

    if (size >= MIN_ROOM_SIZE && size <= MAX_ROOM_SIZE) {
      this.size = size;
    } else {
      this.size = 10;
    }

    rooms.set(this.id, this);
    this.sync();
    console.log(`Room ${this.id} created!`);
  }

  addPlayer(player: Player) {
    if (this.players.length >= this.size) {
      throw new Error("Room is already full!");
    }

    this.players.push(player);

    this.sync();
  }

  removePlayer(player: Player) {
    if (this.players.length <= 1) {
      this.delete();
      return;
    }

    if (player.id === this.owner.id) {
      this.owner = this.players.find((p) => p.id !== player.id)!;
    }

    this.players = this.players.filter((p) => p.id !== player.id);

    player.clear();
    this.sync();
  }

  createGame() {
    this.game = new Game(this);
  }

  delete() {
    rooms.delete(this.id);
    set(ref(database, "rooms/" + this.id), null);
  }

  sync() {
    let roomData: RoomData = {
      size: this.size,
      players: this.players.reduce((acc, p) => ({ ...acc, [p.id]: false }), {}),
      owner: this.owner.id,
    };

    set(ref(database, "rooms/" + this.id), roomData);
  }
}

export interface RoomData {
  size: number;
  players: { [id: string]: boolean };
  owner: string;
}
