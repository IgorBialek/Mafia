import Player from "./Player";
import Room from "./Room";
import Role, { Roles } from "./Roles/Role";
import shuffle from "../utils/shuffle";
import { randomUUID } from "crypto";
import { database } from "../config/firebase";
import { ref, set } from "firebase/database";
import Voting from "./Votings/Voting";
import { START_PHASE_DURATION } from "../lib/constants";
import MafiaVoting from "./Votings/MafiaVoting";
import DoctorVoting from "./Votings/DoctorVoting";
import PolicemanVoting from "./Votings/PolicemanVoting";
import EndRoundVoting from "./Votings/EndRoundVoting";

export type Phase =
  | "start"
  | "mafia"
  | "doctor"
  | "policeman"
  | "day"
  | "voting"
  | "end";

export default class Game {
  public id: string = "";
  public players: Player[] = [];
  public phase: Phase = "start";

  public mafiaVoting?: MafiaVoting;
  public doctorVoting?: DoctorVoting;
  public policemanVoting?: PolicemanVoting;
  public endRoundVoting?: EndRoundVoting;

  public inhabitantPlayersCount: number = 0;
  public mafiaPlayersCount: number = 0;
  public doctorPlayersCount: number = 1;
  public policemanPlayersCount: number = 1;

  constructor(room: Room) {
    console.log("Creating game...");
    this.id = randomUUID();
    this.players = room.players;

    this.start();
    this.sync();

    console.log(`Game ${this.id} created!`);
  }

  start() {
    let playersCount = this.players.length;

    switch (true) {
      case playersCount < 8:
        this.mafiaPlayersCount = 2;
        break;
      case playersCount < 11:
        this.mafiaPlayersCount = 3;
        break;
      case playersCount < 14:
        this.mafiaPlayersCount = 4;
        break;
      case playersCount < 17:
        this.mafiaPlayersCount = 5;
        break;
    }

    this.inhabitantPlayersCount =
      playersCount -
      this.mafiaPlayersCount -
      this.doctorPlayersCount -
      this.policemanPlayersCount;

    let randomIndexes = [];

    for (let i = 0; i <= playersCount - 1; i++) {
      randomIndexes.push(i);
    }

    randomIndexes = shuffle(randomIndexes);

    for (let i = 0; i < this.policemanPlayersCount; i++) {
      this.players[randomIndexes[0]].setRole(new Role(Roles.Policeman));
      randomIndexes.shift();
    }

    for (let i = 0; i < this.doctorPlayersCount; i++) {
      this.players[randomIndexes[0]].setRole(new Role(Roles.Doctor));
      randomIndexes.shift();
    }

    for (let i = 0; i < this.mafiaPlayersCount; i++) {
      this.players[randomIndexes[0]].setRole(new Role(Roles.Mafia));
      randomIndexes.shift();
    }

    for (let i = 0; i < this.inhabitantPlayersCount; i++) {
      this.players[randomIndexes[0]].setRole(new Role(Roles.Inhabitant));
      randomIndexes.shift();
    }

    setTimeout(() => {
      this.nextPhase();
    }, START_PHASE_DURATION);
  }

  nextPhase() {
    switch (this.phase) {
      case "start":
        this.phase = "mafia";
        this.startMafiaPhase();
        break;
      case "mafia":
        this.phase = "policeman";
        break;
      case "doctor":
        this.phase = "policeman";
        break;
      case "policeman":
        this.phase = "day";
        break;
      case "day":
        this.phase = "voting";
        break;
      case "voting":
        this.phase = "mafia";
        break;
      case "end":
        //end
        break;
    }
  }

  startMafiaPhase() {
    this.mafiaVoting = new MafiaVoting();

    this.sync();
  }

  updateVoting(voter: string, candidate: string) {
    switch (this.phase) {
      case "mafia":
        this.mafiaVoting!.addVote(voter, candidate);
        if (this.mafiaVoting!.isCompleted(this.mafiaPlayersCount)) {
          this.nextPhase();
        }

        break;
      case "doctor":
        break;
      case "policeman":
        break;

      case "voting":
        break;
    }
  }

  sync() {
    let gameData: GameData = {
      phase: this.phase,
      votings: {
        mafia: this.mafiaVoting ? this.mafiaVoting.votes : {},
        doctor: this.doctorVoting ? this.doctorVoting.votes : {},
        policeman: this.policemanVoting ? this.policemanVoting.votes : {},
        endRound: this.endRoundVoting ? this.endRoundVoting.votes : {},
      },
    };

    set(ref(database, "games/" + this.id), gameData);
  }
}

export interface GameData {
  phase: string;
  votings: AllVotingsData;
}

export interface AllVotingsData {
  mafia: { [id: string]: string };
  doctor: { [id: string]: string };
  policeman: { [id: string]: string };
  endRound: { [id: string]: string };
}
