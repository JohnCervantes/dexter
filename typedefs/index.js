import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type image {
    _id: ID
    date: String!
    URL: String
    likes: String
    dislikes: String
  }

  type likes {
    _id: ID
    likes: String
  }

  type dislikes {
    _id: ID
    dislikes: String
  }

  type Query {
    images: [image]
    image(_id: ID!): image
  }

  type Mutation {
    addImage(
      date: String!
      URL: String!
      likes: String
      dislikes: String
    ): image
    addLike(_id: ID!, likes: String!): likes
    addDislike(_id: ID!, dislikes: String!): dislikes
    updateImage(_id: ID!, URL: String!): Boolean
  }
`;

export default typeDefs;
