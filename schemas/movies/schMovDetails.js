const schMovieDetails = `
  type Genre {
    id: Int!
    name: String!
  }

  type ProductionCompany {
    id: Int!
    logo_path: String
    name: String!
    origin_country: String
  }

  type ProductionCountry {
    iso_3166_1: String!
    name: String!
  }

  type SpokenLanguage {
    english_name: String
    iso_639_1: String!
    name: String!
  }

  type MovieDetail {
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
    budget: Int
    genres: [Genre]
    homepage: String
    imdb_id: String
    production_companies: [ProductionCompany]
    production_countries: [ProductionCountry]
    revenue: Int
    runtime: Int
    spoken_languages: [SpokenLanguage]
    status: String
    tagline: String
  }

  extend type Query {
    movieDetails(id: ID!): MovieDetail
  }
`;

module.exports = schMovieDetails;
