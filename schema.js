var x = require("graphql-tools");
var resolvers = require("./resolver");

var appSchema = `
  type Subscription {
    postAdded: Post,
    listenPostAdded: Post,
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    addPost(author: String, comment: String): Post
  }

  type Post {
    author: String
    comment: String
  }
`;

var schema = x.makeExecutableSchema({ typeDefs: appSchema, resolvers: resolvers });
module.exports = schema;
