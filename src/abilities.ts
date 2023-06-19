import { Family, FlyerFamily, Species } from "./interfaces/interfaces";


const flyerFamily: FlyerFamily = {
  name: Family.Flyer,
  fly() {
    // Functionality for flying
  },
  diveBomb() {
    // Functionality for dive bombing
  },
  fastDodge() {
    // Functionality for fast dodging
  },
};

const swimmerFamily = {
  name: Family.Swimmer,
  airLaunch() {
    // Functionality for air launching
  },
  fastMove() {
    // Functionality for fast moving
  },
};

const runnerFamily = {
    name:Family.Runner,
    dash() {
      // Functionality for dash
    },
};

const birdSpecies = {
  name: Species.Bird,
  peck() {
    // Functionality for pecking
  },
  dropEggBomb() {
    // Functionality for dropping egg bombs
  },
};

const sharkSpecies = {
  name: Species.Shark,
  biteAttack() {
    // Functionality for bite attacking
  },
  smellScent() {
    // Functionality for smelling scents
  },
};

const lionSpecies = {
    name:Species.Lion,
}

const monkeySpecies = {
    name:Species.Monkey
}

export const abilitiesByFamily = {
  Flyer: flyerFamily,
  Swimmer: swimmerFamily,
  Runner: runnerFamily
};

export const abilitiesBySpecies = {
  Bird: birdSpecies,
  Shark: sharkSpecies,
  Lion: lionSpecies,
  Monkey: monkeySpecies

};
