import { Roles } from "../constants/Roles";

export type Player = {
  uuid: string;
  username: string;
  ready: boolean;
  role: Roles;
  isOwner: boolean;
};
