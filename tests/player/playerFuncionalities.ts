import { players } from "../../src/controllers/player.controller";
import Player from "../../src/models/Player";
import Role, { Roles } from "../../src/models/Roles/Role";
import Room from "../../src/models/Room";

export const playerFuncionalities = () =>
  describe("Player Functionalities", () => {
    let player: Player;

    beforeEach(() => {
      player = new Player("Igor");
    });

    it("should create a new player", () => {
      expect(player.name).toBe("Igor");
      expect(player.id).toBeDefined();
      expect(player.isReady).toBe(false);
      expect(player.role).toBeUndefined();
    });

    it("should rename a player", () => {
      let newName = "Patryk";
      player.rename(newName);

      expect(player.name).toBe(newName);
    });

    it("should set a player's role", () => {
      let role = new Role(Roles.Mafia);
      player.setRole(role);

      expect(player.role).toBe(role);
    });

    it("should toggle a player's readiness", () => {
      player.toggleReadiness();

      expect(player.isReady).toBe(true);
    });

    it("should clear a player's role and readiness", () => {
      player.clear();

      expect(player.isReady).toBe(false);
      expect(player.role).toBeUndefined();
    });

    it("should delete a player", () => {
      player.delete();

      expect(players.has(player.id)).toEqual(false);
    });

    it("should sync a player", () => {
      player.sync();

      expect(players.has(player.id)).toEqual(true);
    });
  });
