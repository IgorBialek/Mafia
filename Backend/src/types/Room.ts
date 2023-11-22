import { Phases } from "../constants/Phases";

export type Room = {
  uuid: string;
  size: number;
  name: string;
  phase: Phases;
};
