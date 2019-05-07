import { mergeResolvers } from "merge-graphql-schemas";
import Person from "./person/";
import Planet from "./planet/";
import Starship from "./starship/"

const resolvers = [Person, Planet, Starship];

export default mergeResolvers(resolvers);