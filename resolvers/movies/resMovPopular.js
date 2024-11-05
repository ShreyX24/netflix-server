const fetch = require("node-fetch");

const resMovNowPlaying = {
  Query: {
    movPopular: async () => {
      const url = `https://api.themoviedb.org/3/movie/popular`;
      const options = {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
        },
      };

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    },
  },
};

module.exports = resMovNowPlaying;
