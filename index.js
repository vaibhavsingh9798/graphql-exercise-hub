const express = require('express');
const cors = require('cors')
const {ApolloServer} = require('@apollo/server')
const {expressMiddleware} = require('@apollo/server/express4')
require('dotenv').config();

const typeDefs = require('./graphql/typedefs/index')
const resolvers = require('./graphql/resolvers/index')

const PORT =  process.env.PORT || 8002;

const app = express();

app.use(express.json())
app.use(cors())

async function  startServer(){
const server = new ApolloServer({ typeDefs,resolvers})

await server.start();
app.use('/graphql',expressMiddleware(server)) ;
}
startServer();


app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})
