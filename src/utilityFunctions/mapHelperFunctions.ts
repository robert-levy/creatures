import {
  InitMapPayload,
  State,
  MapCell,
  ICreature,
  ICollector,
  Location,
} from "../interfaces/interfaces";
import creaturesJSON from "../assets/creatures.json";
import collectorJSON from "../assets/collectors.json";
import staticWorldMap from "../assets/staticWorldMap.json";

const initMapDefaultValues = {
  mapSize: 8,
  numOfCollectors: 3,
  numOfCreatures: 9,
};

function loadCreatures(): ICreature[] {
  return creaturesJSON as ICreature[];
}
function loadCollectors(): ICollector[] {
  return collectorJSON as ICollector[];
}
function loadStaticWorldMap(): State {
  return staticWorldMap as State;
}

export const initMap = (
  payload: InitMapPayload = initMapDefaultValues
): State => {
  // Add checks to parameters and return error if they are wrong
  // <code here>

  const { mapSize, numOfCollectors, numOfCreatures } = payload;

  if (!mapSize || !numOfCollectors || !numOfCreatures) return { worldMap: [] }; // typescript cannot infer mapSize always has val

  const creatures = loadCreatures();
  const collectors = loadCollectors();

  // create 2d array of mapCells, inserting Collectors and Creatures
  const newState: State = {
    worldMap: Array.from({ length: mapSize }, (_, row) =>
      Array.from({ length: mapSize }, (_, col): MapCell => {
        // if we are in corner, add a collector unless we passed numOfCollectors
        // if we are 2 rows and columns in the grid, randomly insert Creature up to numOfCreatures
        // create blocks of different terrains
        return {
          terrain: "desert",
          location: { x: row, y: col },
          spaceTaken: false,
          occupiedBy: null,
        };
      })
    ),
  };
  const hardcodedMapState = loadStaticWorldMap();

  const flattenedData = hardcodedMapState.worldMap.map((row) =>
    row.map(({ terrain, location, spaceTaken, occupiedBy }) => ({
      terrain,
      location: JSON.stringify(location),
      spaceTaken,
      occupiedBy: JSON.stringify(occupiedBy),
    }))
  );
  console.table(flattenedData.flat());

  return hardcodedMapState;
};

export const getNewLocation = (
  currentLocation: Location,
  direction: string
): Location => {
  if (!currentLocation) return currentLocation;
  const newLocation: Location = {...currentLocation};
  switch (direction) {
    case "up": {
      newLocation.x -= 1;
      return newLocation;
    }
    case "down":
      newLocation.x += 1;
      return newLocation;
    case "left":
      newLocation.y -= 1;
      return newLocation;
    case "right":
      newLocation.y += 1;
      return newLocation;
    default:
      return currentLocation;
  }
};

export const moveLocation = (
  state: State,
  fromLocation: Location,
  toLocation: Location
): State => {
    if(!fromLocation || !toLocation) return state
    const { worldMap } = state;

    // Copy the worldMap to a new array to avoid mutating the original state
    const newWorldMap = [...worldMap];
  
    // Retrieve the occupiedBy object from the fromLocation, and update its location too
    const occupiedBy = worldMap[fromLocation.x][fromLocation.y].occupiedBy;
    if(!occupiedBy) return state // quick fix
    occupiedBy.location = toLocation
  
    // Set the occupiedBy and spaceTaken properties in the fromLocation
    newWorldMap[fromLocation.x][fromLocation.y].occupiedBy = null;
    newWorldMap[fromLocation.x][fromLocation.y].spaceTaken = false;
  
    // Set the occupiedBy and spaceTaken properties in the toLocation
    newWorldMap[toLocation.x][toLocation.y].occupiedBy = occupiedBy;
    newWorldMap[toLocation.x][toLocation.y].spaceTaken = true;

    // Check if any collectors are now neighbouring any creatures
    // <code>
    // const adjacentCreatures = getAdjacentMapCells(toLocation, newWorldMap)
    // connst collector = occupiedBy
  
    // Return the updated state with the modified worldMap    
    return {
      worldMap: newWorldMap,
      // startCapture:  {collector, adjacentCreatures}
    };
};

const getAdjacentMapCells = (
    location: Location,
    worldMap: MapCell[][]
  ): MapCell[] => {
    if(!location) return []
    const {x,y} = location;
    const adjacentCells: MapCell[] = [];
    const rows = worldMap.length;
    const cols = worldMap[0].length;
  
    // Check top
    if (x > 0) {
      adjacentCells.push(worldMap[x - 1][y]);
    }
    // Check bottom
    if (x < rows - 1) {
      adjacentCells.push(worldMap[x + 1][y]);
    }
    // Check left
    if (y > 0) {
      adjacentCells.push(worldMap[x][y - 1]);
    }
    // Check right
    if (y < cols - 1) {
      adjacentCells.push(worldMap[x][y + 1]);
    }
  
    return adjacentCells;
  };