import { mergeTypes } from 'merge-graphql-schemas';
import Person from './person/';
import Planet from './planet/';
import Starship from './starship/'

const types = [Person, Planet, Starship];

export default mergeTypes(types, { all: true });