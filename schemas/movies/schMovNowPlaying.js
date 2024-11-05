// schemas/movies/schMovNowPlaying.js
const schMovNowPlaying = `
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

  type Dates {
    maximum: String
    minimum: String
  }

  type MovieResponse {
    dates: Dates
    page: Int!
    results: [Movie]!
    total_pages: Int!
    total_results: Int!
  }

  type Query {
    movNowPlaying: MovieResponse
    movUpcoming: MovieResponse
  }
`;

module.exports = schMovNowPlaying;
