import { Phases } from "../Frontend/src/constants/Phases";

export type Room = {
  uuid: string;
  size: number;
  name: string;
  phase: Phases;
  isPrivate: boolean;
  password: string;
  numberOfMafia: number;
};
