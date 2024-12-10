import React from "react";
import GPTSearch from "./GPTSearch";
import GPTSuggestions from "./GPTSuggestions";

const GPTContainer = () => {
  return (
    <div>
      <div className="absolute">
        <img
          alt="background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_large.jpg"
        />
      </div>
      <div className="absolute pt-[10%] w-screen">
        <GPTSearch />
        <GPTSuggestions />
      </div>
    </div>
  );
};

export default GPTContainer;
