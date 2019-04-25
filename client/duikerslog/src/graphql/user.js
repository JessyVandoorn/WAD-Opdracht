import gql from "graphql-tag";

export default gql`
  query user($authid: String!) {
    user(authid: $authid) {
      _id
      authid
      email
      name
    }
  }
`;