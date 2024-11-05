// schemas/movies/schMovNowPlaying.js
const schMovPopular = `
  type Movie {
    id: ID!
    title: String!
    original_title: String!
    overview: String
    release_date: String
    popularity: Float
    vote_average: Float
    vote_count: Int
    poster_path: String
    backdrop_path: String
    original_language: String
    adult: Boolean
    video: Boolean
    genre_ids: [Int]
  }

  type MovieResponse {
    page: Int!
    results: [Movie]!
    total_pages: Int!
    total_results: Int!
  }

  type Query {
    movPopular: MovieResponse
    movTopRated: MovieResponse
  }
`;

module.exports = schMovPopular;
