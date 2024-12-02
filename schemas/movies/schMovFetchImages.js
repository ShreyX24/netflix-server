const schMovieImages = `
  type Image {
    aspect_ratio: Float!
    height: Int!
    iso_639_1: String
    file_path: String!
    vote_average: Float!
    vote_count: Float!
    width: Int!
  }

  type MovieImages {
    id: ID!
    backdrops: [Image]!
  }

  extend type Query {
    movieFetchImages(id: ID!): MovieImages
  }
`;

module.exports = schMovieImages;
