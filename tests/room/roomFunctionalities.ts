import { players } from "../../src/controllers/player.controller";
import { rooms } from "../../src/controllers/room.controllers";
import { START_PHASE_DURATION } from "../../src/lib/constants";
import Player from "../../src/models/Player";
import Role, { Roles } from "../../src/models/Roles/Role";
import Room from "../../src/models/Room";

export const roomFuncionalities = () =>
  describe("Room Functionalities", () => {
    let room: Room;
    let owner: Player = new Player("Igor");

    beforeEach(() => {
      room = new Room(owner, 6);
    });

    it("should create a new room", () => {
      expect(room.id).toBeDefined();
      expect(room.owner).toBe(owner);
      expect(room.players).toEqual(new Array(owner));
      expect(room.size).toBe(6);
    });

    it("should add a player to a room", () => {
      let player = new Player("Patryk");
      room.addPlayer(player);
      expect(room.players.some((p) => p.id === player.id)).toBe(true);
    });

    it("should remove a player from a room", () => {
      let player = new Player("Karol");
      room.addPlayer(player);
      room.removePlayer(player);
      expect(room.players.some((p) => p.id === player.id)).toBe(false);
    });

    it("should remove a room if there is no players left", () => {
      room.removePlayer(owner);
      expect(rooms.has(room.id)).toBe(false);
    });

    it("should change the owner of the room", () => {
      let player1 = new Player("Karol");
      room.addPlayer(player1);
      room.removePlayer(owner);
      expect(room.owner).toBe(player1);
    });

    it("should create a game", async () => {
      for (let i = 0; i < room.size - 1; i++) {
        room.addPlayer(new Player("Player" + i));
      }
      room.players.forEach((p) => p.toggleReadiness());

      room.createGame();
      expect(room.game).toBeDefined();
    });

    it("should delete a room", () => {
      room.delete();
      expect(rooms.has(room.id)).toBe(false);
    });

    it("should sync a room", () => {
      room.sync();
      expect(rooms.get(room.id)).toEqual(room);
    });
  });
