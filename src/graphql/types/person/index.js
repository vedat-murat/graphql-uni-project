export default `

    type Person {
        _id: String!,
        name: String!,
        birthDate: String,
        height: String,
        gender: String,
        imagePath: String
    }

    type Query {
        person(_id: String!): Person
        people: [Person]
    }

    type Mutation {
        addPerson(name: String!, birthDate: String, height: String, gender: String, imagePath: String): Person
        editPerson(_id: String!, name: String!, name: String!, birthDate: String, height: String, gender: String, imagePath: String): Person
        deletePerson(_id: String!): Person
    }

`;