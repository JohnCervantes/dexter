import { gql } from "@apollo/client";

export const ALL_IMAGES = gql`
  query {
    images {
      _id
      date
      URL
      likes
      dislikes
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
