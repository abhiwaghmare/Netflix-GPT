import React from "react";

const CastCard = ({ name, profile_path }) => {
  return (
    <div>
      <div>
        {!profile_path ? (
          <img
            alt="castImage"
            src="https://www.svgrepo.com/show/311063/person.svg"
            className="w-[185px] h-[278px] filter invert"
          ></img>
        ) : (
          <img
            src={"https://image.tmdb.org/t/p/w185/" + profile_path}
            alt="cast"
            className="rounded-lg"
          />
        )}
      </div>
      <div>
        <p className="text-white text-center text-lg mt-2">{name}</p>
      </div>
    </div>
  );
};

export default CastCard;
