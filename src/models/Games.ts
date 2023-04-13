import { onValue, ref, set } from "firebase/database";
import { database } from "../config/firebase";
import Game from "./Game";
import { randomUUID } from "crypto";

export default class Games {
  static games: { [id: string]: Game } = {};

  static createGame(game: Game) {
    let id = randomUUID();

    set(ref(database, "games/" + id), game);

    return id;
  }

  static observe() {
    const gamesRef = ref(database, "games/");
    onValue(gamesRef, (snapshot) => {
      this.games = snapshot.val();
      console.log(this.games);
    });
  }
}
