const { ApolloServer} = require('apollo-server');
const typeDefs = require('./db/schema.graphql');
const resolvers = require('./db/resolvers');
const conectarDB = require('./config/db');
const cors = require('cors');
//Connect to DB 
conectarDB();



//server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: {
        origin: "*"
    },
    
});

//Run server
server.listen({port: process.env.PORT || 4000}).then( ({url}) => {
    console.log(`server ready on ${url}`)
})