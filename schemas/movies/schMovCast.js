const schCastDetails = `
  type Cast {
    adult: Boolean!
    gender: Int
    id: ID!
    known_for_department: String!
    name: String!
    original_name: String!
    popularity: Float
    profile_path: String
    cast_id: Int
    character: String!
    credit_id: String!
    order: Int!
  }

  type MovieCast {
    id: ID!
    cast: [Cast!]!
  }

  extend type Query {
    movieCastDetails(id: ID!): MovieCast
  }
`;

module.exports = schCastDetails;
