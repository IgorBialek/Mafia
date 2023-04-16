import { players } from "../../controllers/player.controller";
import Player from "../Player";
import Voting from "./Voting";

export default class MafiaVoting extends Voting {
  public playerToKill?: Player;

  isCompleted(mafiaPlayersCount: number) {
    if (Object.keys(this.votes).length === mafiaPlayersCount) {
      let candidates = Object.values(this.votes);

      this.playerToKill = players.get(this.getResult(candidates));
      return true;
    }

    return false;
  }
}
