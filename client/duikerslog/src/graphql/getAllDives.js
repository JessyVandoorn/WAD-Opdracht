import gql from "graphql-tag";

export default gql `
    query getAllDives($user: String!) {
        allDives (user: $user){
            _id
            datum
            locatie
            temperatuur
            diepte
            buddy
            luchtStart
            luchtEind
            user {
                name
            }
        }
    }
`;