export default gql `
    mutation deleteDive(
        $id: String!
    ){
        deleteDive(_id: $id){
            _id
        }
    }
`;