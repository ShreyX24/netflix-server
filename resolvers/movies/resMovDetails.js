const { fetchFromMovieApi } = require("../../utils/movieApi");

const resMovieDetails = {
  Query: {
    movieDetails: async (_, { id }) => {
      try {
        return await fetchFromMovieApi(`/movie/${id}`, { language: "en-US" });
      } catch (error) {
        throw new Error(`Failed to fetch movie details: ${error.message}`);
      }
    },
  },
};

module.exports = resMovieDetails;
