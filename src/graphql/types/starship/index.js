export default `

    type Starship {
        _id: String!,
        name: String!,
        manufacturer: String,
        model: String,
        costInCredits: String,
        imagePath: String
    }

    type Query {
        starship(_id: String!): Starship
        starships: [Starship]
    }

    type Mutation {
        addStarship(name: String!, manufacturer: String, model: String, costInCredits: String, imagePath: String): Starship
        editStarship(_id: String!, name: String!, manufacturer: String, model: String, costInCredits: String, imagePath: String): Starship
        deleteStarship(_id: String!): Starship
    }

`;