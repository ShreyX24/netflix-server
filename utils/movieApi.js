const fetchFromMovieApi = async (endpoint, params = {}) => {
  const baseUrl = "https://api.themoviedb.org/3";
  const queryString = new URLSearchParams(params).toString();
  const url = `${baseUrl}${endpoint}${queryString ? `?${queryString}` : ""}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    console.log(response);
    return await response.json();
  } catch (error) {
    throw new Error(`API request failed: ${error.message}`);
  }
};

module.exports = { fetchFromMovieApi };
