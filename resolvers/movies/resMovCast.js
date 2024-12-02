const { fetchFromMovieApi } = require("../../utils/movieApi");

const resMovCast = {
  Query: {
    movieCastDetails: async (_, { id }) => {
      try {
        return await fetchFromMovieApi(`/movie/${id}/credits`, {
          language: "en-US",
        });
      } catch (error) {
        throw new Error(`Failed to fetch cast details: ${error.message}`);
      }
    },
  },
};

module.exports = resMovCast;
