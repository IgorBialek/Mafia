import { Roles } from "../constants/Roles";

export type Player = {
  UUID: string;
  username: string;
  ready: boolean;
  roomUUID: string;
  role: Roles;
};
