var { ApolloServer } = require('apollo-server');
var { resolvers, typeDefs } = require('./schema');

var server = new ApolloServer({
    typeDefs,
    resolvers,
    subscriptions: {
        onConnect: (connectionParams, webSocket) => {
            console.log(connectionParams);
        },
    },
});

server.listen().then(({ url, subscriptionsUrl }) => {
    console.log(`Subscriptions URL ${subscriptionsUrl}`);
});
