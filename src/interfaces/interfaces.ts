export enum Family {
  Swimmer = "Swimmer",
  Flyer = "Flyer",
  Runner = "Runner",
}

export enum Species {
  Shark = "Shark",
  Lion = "Lion",
  Bird = "Bird",
  Monkey = "Monkey",
}

export enum Terrain {
  Desert = "Desert",
  Sea = "Sea",
  Jungle = "Jungle",
  Land = "Land",
}

export interface FlyerFamily {
  name: Family.Flyer;
  fly: () => void;
  diveBomb: () => void;
  fastDodge: () => void;
}

export type Location = { x: number; y: number } | null;

export interface ICreature {
  id: string;
  name: string;
  family: Family;
  species: Species;
  hp: number;
  location: Location;
  captured: boolean;
  type?: "Creature" | "Collector";
}

export interface ICollector {
  id: string;
  name: string;
  location: Location;
  type?: "Creature" | "Collector";
}

export type EntityType = ICreature | ICollector;

export interface MapCell {
  terrain: string;
  location: Location;
  spaceTaken: boolean;
  occupiedBy: ICreature | ICollector | null;
}

export interface State {
  worldMap: MapCell[][];
  startCapture?: any
}

/**
 * Payload interfaces
 */

export interface InitMapPayload {
  mapSize?: number;
  numOfCollectors?: number;
  numOfCreatures?: number;
}
