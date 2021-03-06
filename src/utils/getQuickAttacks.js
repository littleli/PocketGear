/* @flow */

import store from '../store';
import type {
  Pokemon,
} from '../typeDefinitions';

export default function getQuickAttacks(pokemon: Pokemon) {
  const quickAttacks = store.getQuickAttacks();

  return quickAttacks
    .filter(attack =>
      attack.known_by.includes(pokemon.id)
    )
    .sort((a, b) => (b.damage / b.duration) - (a.damage / a.duration));
}
