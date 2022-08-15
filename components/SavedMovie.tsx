import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import { Movie } from "../typings";

interface Props {
  movie: Movie | DocumentData;
}

function SavedMovie({ movie }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div
      className='relative h-24 min-w-[250px] md:w-[290px] sm:h-28 cursor-pointer transition duration-200
        ease-out md:h-40 md:min-w-[260px] md:hover:scale-105'
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className='object-cover rounded'
        layout='fill'
        alt={movie.name || movie.title}
      />

      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white rounded-sm md:rounded'>
        <p className='text-xs md:text-sm font-bold flex justify-center items-center h-full text-center whitespace-normal'>
          {movie.title || movie.name}
        </p>
      </div>
    </div>
  );
}

export default SavedMovie;
