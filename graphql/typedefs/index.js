
const typeDefs = `#graphql
       
type Game {
 id : ID!
 title : String!
 plateform : [String!]!
 reviews: [Review!]
}

type Author{
    id : ID!
    name : String!
    verified : Boolean!
    reviews: [Review!]
}

type Review{
    id : ID!
    rating : Int!
    content : String!
    game : Game!
    author : Author!
}

type Query{

    games : [Game]
    game(id : ID!)  : Game

    authors : [Author]
    author(id : ID!) : Author

    reviews : [Review]
    review(id : ID!) : Review
}

input AddGameInput{
    title : String!
    plateform : [String!]!
}

input  EditGameInput{
    title : String
    plateform : [String]
}

type Mutation{
    addGame(game : AddGameInput!) : Game
    deleteGame(id: ID !) : [Game]
    updateGame(id: ID!, edits : EditGameInput!): Game
}

`

module.exports = typeDefs;