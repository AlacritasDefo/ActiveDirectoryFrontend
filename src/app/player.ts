import {Team} from "./team";

export interface Player{
  id: number;
  name: string;
  surname: string;
  number: number;
  team: Team;
}
