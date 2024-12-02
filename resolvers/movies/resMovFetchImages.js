const { fetchFromMovieApi } = require("../../utils/movieApi");

const resMovieFetchImages = {
  Query: {
    movieFetchImages: async (_, { id }) => {
      try {
        const movieImages = await fetchFromMovieApi(`/movie/${id}/images`, {});

        return {
          id: movieImages.id,
          backdrops: movieImages.backdrops.filter(
            (backdrop) => backdrop.iso_639_1 === "en"
          ),
        };
      } catch (error) {
        throw new Error(`Failed to fetch movie images: ${error.message}`);
      }
    },
  },
};

module.exports = resMovieFetchImages;
