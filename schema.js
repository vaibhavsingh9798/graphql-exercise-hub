
exports.typeDefs = `#graphql
       
type Game{
 id : ID!
 title : String!
 plateform : [String!]!
}

type Author{
    id : ID!
    name : String!
    verified : Boolean!
}

type Review{
    id : ID!
    rating : Int!
    content : String!
}

type Query{

    games : [Game]
    authors : [Author]
    reviews : [Review]
    hello : String 
}

`