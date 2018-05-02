import gql from "graphql-tag";

export default gql`
    query getDive($id: String!){
        dive(_id:$id){
            _id
            datum
            locatie
            temperatuur
            diepte
            buddy
            luchtStart
            luchtEind
        }
    }
`;