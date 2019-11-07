var { PubSub } = require('apollo-server');
var pubsub = new PubSub();
var POST_ADDED = 'POST_ADDED';

var posts = [
    {
        author: "Tubin",
        comment: "Test comment"
    },
    {
        author: "Shaji",
        comment: "Test comment"
    },
    {
        author: "Test Author",
        comment: "Test comment"
    },
];

var resolvers = {
    Subscription: {
        postAdded: {
            subscribe: () => pubsub.asyncIterator([POST_ADDED]),
        },
    },
    Query: {
        posts(root, args, context) {
            return posts;
        },
        Mutation: {
            addPost(root, args, context) {
                pubsub.publish(POST_ADDED, { postAdded: args });
                post.push(args.post);
                return args.post;
            },
        },
    } 
}
