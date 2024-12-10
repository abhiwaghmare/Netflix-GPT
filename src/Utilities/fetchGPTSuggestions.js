import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINIAI_KEY } from "./Constants";

export const fetchGPTSuggestions = async (searchText) => {
  const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar,Sholay,Don,Golmaal,Koi Mil Gaya";

  const genAI = new GoogleGenerativeAI(GEMINIAI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = gptQuery;

  const result = await model.generateContent(prompt);
  const movieListString = result.response.text();
  const recommendedMovies = movieListString?.trim()?.split(",");
  const moviesList = recommendedMovies.map((movie) => movie.trim());
  return moviesList;
};
