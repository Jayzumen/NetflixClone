import { DocumentData } from "firebase/firestore";
import React from "react";
import { Movie } from "../typings";
import SavedMovie from "./SavedMovie";

interface Props {
  movies: Movie[] | DocumentData[];
}

function SavedList({ movies }: Props) {
  return (
    <div className='pt-10 w-fit mx-auto '>
      <h2
        className='font-semibold text-[#e5e5e5]
        text-2xl lg:text-4xl pb-6'>
        My saved Movies
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4'>
        {movies.map((movie) => (
          <SavedMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default SavedList;
