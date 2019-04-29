import gql from "graphql-tag";

export default gql`
    query getCurrentUser($authid: String!){
        user(authid:$authid){
          authid
           name
           email
        }
    }
`;