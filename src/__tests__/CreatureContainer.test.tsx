import { render } from '@testing-library/react';
import CreatureContainer from '../components/Creature/CreatureContainer';
import { Family, Species } from '../interfaces/interfaces';

describe('CreatureContainer', () => {
  it('should render a Creature of family Species Shark and Family Swimmer', () => {
    const creature = {
      id: "1",
      name: 'Creature 1',
      species: Species.Shark,
      family: Family.Swimmer,
      hp: 100,
      location: { x: 0, y: 0 },
      captured: false,
    };

    const { getByText } = render(<CreatureContainer creature={creature} />);

    expect(getByText('Creature 1')).toBeInTheDocument();
  });
});
