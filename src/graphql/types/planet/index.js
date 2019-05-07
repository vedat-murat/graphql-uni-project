export default `

    type Planet {
        _id: String!,
        name: String!,
        rotationPeriod: String,
        orbitalPeriod: String,
        diameter: String,
        imagePath: String
    }

    type Query {
        planet(_id: String!): Planet
        planets: [Planet]
    }

    type Mutation {
        addPlanet(name: String!, rotationPeriod: String, orbitalPeriod: String, diameter: String, imagePath: String): Planet
        editPlanet(_id: String!, name: String!, rotationPeriod: String, orbitalPeriod: String, diameter: String, imagePath: String): Planet
        deletePlanet(_id: String!): Planet
    }

`;