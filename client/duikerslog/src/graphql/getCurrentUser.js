import gql from "graphql-tag";

export default gql`
  {
    currentUser{
      name
      telefoon
      email
      specialisme
    }
  }
`;