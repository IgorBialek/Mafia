import { initDatabase } from "./database/init";
import { clearDatabase } from "./database/clear";
import { playerFuncionalities } from "./player/playerFuncionalities";
import { roomFuncionalities } from "./room/roomFunctionalities";

describe("Simulate Environment", () => {
  initDatabase();

  playerFuncionalities();

  roomFuncionalities();

  //   clearDatabase();
});
