import {
  State,
  Location,

  InitMapPayload,
} from "../interfaces/interfaces";

export const initialState: State = {
  worldMap:[]
};

export enum ActionTypes {
  INIT_MAP = "INIT_MAP",
  MOVE_SQUARE = "MOVE_SQUARE",
}

interface InitMapAction {
  type: ActionTypes.INIT_MAP;
  payload?: InitMapPayload;
}

interface MoveSquarePayload {
  id: string;
  fromLocation: Location,
  toLocation: Location;
}

interface MoveSquareAction {
  type: ActionTypes.MOVE_SQUARE;
  payload: MoveSquarePayload;
}

export type Action = MoveSquareAction | InitMapAction;

// Actions
export const moveSquare = (payload: MoveSquarePayload): MoveSquareAction => ({
  type: ActionTypes.MOVE_SQUARE,
  payload,
});

export const initMap = (payload?: InitMapPayload): InitMapAction => ({
  type: ActionTypes.INIT_MAP,
  payload,
});
