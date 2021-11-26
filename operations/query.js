import { gql } from "@apollo/client";

export const ALL_IMAGES = gql`
  query {
    images {
      _id
      URL
    }
  }
`;


export const ALL_EPISODES = gql`
  query {
    episodes {
      _id
      title
      src
      director
      teleplay
      writter
      rating
      synopsis
    }
  }
`;

export const ALL_METADATA = gql`
  query image($_id: ID!) {
    image(_id: $_id) {
      _id
      likes
      dislikes
      date
    }
  }
`;

export function readState(fields) {
  return gql`query {
    readState @client {
      ${fields}
    }
  }
`;
}
