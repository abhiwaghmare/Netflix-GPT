import React, { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINIAI_KEY } from "../Utilities/Constants";
// import openai from "../Utilities/openai";

const GPTSearch = () => {
  const searchText = useRef(null);

  const handleGPTSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const genAI = new GoogleGenerativeAI(GEMINIAI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = gptQuery;

    const result = await model.generateContent(prompt);
    console.log("gptResults-", result.response.text());

    
  };

  return (
    <div className="bg-black w-1/2 px-5 py-3 items-center justify-center gap-3 grid grid-cols-12 m-auto shadow-xl bg-opacity-90">
      <input
        ref={searchText}
        type="text"
        placeholder="What would you like to watch today ?"
        className="m-4 p-2 rounded-lg col-span-10"
      ></input>
      <button
        className="bg-red-700 text-white py-2 px-4 rounded-lg shadow-md col-span-2"
        onClick={handleGPTSearch}
      >
        Search
      </button>
    </div>
  );
};

export default GPTSearch;
