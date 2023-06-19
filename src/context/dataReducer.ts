import { State } from "../interfaces/interfaces";
import { initMap, moveLocation } from "../utilityFunctions/mapHelperFunctions";
import { Action, ActionTypes } from "./dataActions";

const reducer = (state:State, action: Action) => {
  switch (action.type) {

    case ActionTypes.INIT_MAP: {
        const newState =  initMap(action.payload)
        return newState
            
        
    }

    case ActionTypes.MOVE_SQUARE: {
      const {fromLocation,toLocation} = action.payload
      const newState = moveLocation(state,fromLocation,toLocation)
      return {
        ...state,
        // move entity
      };
    }

    default:
      return state
  }
};
export default reducer;
