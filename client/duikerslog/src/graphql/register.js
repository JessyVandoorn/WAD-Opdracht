import gql from "graphql-tag";

export default gql`
  mutation register($name: String!, $email: String!, $authid:String!) {
    user: register(name: $name, email: $email, authid:$authid) {
      _id
      name
      email
    }
  }
`;