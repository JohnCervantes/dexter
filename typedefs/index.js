import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type image {
    _id: ID
    date: String!
    URL: String
    likes: String
    dislikes: String
  }

  type episode {
    _id: ID
    src: String!
    title: String!
    director: String!
    teleplay: String
    writter: String!
    rating: String!
    synopsis: String!
  }

  type likes {
    _id: ID
    likes: String
  }

  type dislikes {
    _id: ID
    dislikes: String
  }

  type rating {
    _id: ID
    rating: String
  }

  type Query {
    images: [image]
    episodes: [episode]
    image(_id: ID!): image
  }

  # title: { type: String, required: true },
  # src: { type: String, required: true },
  # director: { type: String, required: true },
  # teleplay: { type: String, required: false },
  # writter: { type: String, required: false },
  # rating: { type: Number, required: true },
  # synopsis: { type: String, required: true },

  type Mutation {
    addEpisode(
      title: String!
      src: String!
      director: String!
      teleplay: String
      writter: String!
      rating: String!
      synopsis: String!
    ): episode
    addImage(
      date: String!
      URL: String!
      likes: String
      dislikes: String
    ): image
    addLike(_id: ID!, likes: String!): likes
    addDislike(_id: ID!, dislikes: String!): dislikes
    updateImage(_id: ID!, URL: String!): Boolean
    addRating(_id: ID!, rating: String!): rating
  }
`;

export default typeDefs;
