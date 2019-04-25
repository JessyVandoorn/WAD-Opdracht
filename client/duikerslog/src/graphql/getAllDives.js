import gql from "graphql-tag";

export default gql `
    query getAllDives {
        allDives{
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