import gql from "graphql-tag";

export default gql `
    mutation addDive(
        $datum: String!, $locatie: String!, $temperatuur: Int!, $diepte: Float!, $buddy: String!, $luchtStart:Int!, $luchtEind: Int!
    ){
        addDive(datum: $datum, locatie:$locatie, temperatuur: $temperatuur, diepte: $diepte, buddy: $buddy, luchtStart:$luchtStart, luchtEind:$luchtEind){
            _id
            datum
            locatie
            temperatuur
            diepte
            buddy
            luchtStart
            luchtEind
            user{
                name
            }
        }
    }
`;