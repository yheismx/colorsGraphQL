const { ApolloServer} = require('apollo-server');
const typeDefs = require('./db/schema.graphql');
const resolvers = require('./db/resolvers');
const conectarDB = require('./config/db');

//Conectar a la base de datos 
conectarDB();


//servidor
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

//Arancar el servidor
server.listen().then( ({url}) => {
    console.log(`servidor listo  en la URL ${url}`)
})