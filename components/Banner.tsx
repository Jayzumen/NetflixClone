import Image from "next/image";
import { Movie } from "../typings";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { modalState, movieState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  useEffect(() => {
    setMovie(
      netflixOriginals[
        Math.floor(Math.random() * netflixOriginals.length)
      ]
    );
  }, [netflixOriginals]);

  return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[80%] lg:justify-end lg:pb-12'>
      <div className='absolute top-0 left-0 -z-10 h-[95vh] w-full'>
        <Image
          src={`${baseUrl}${
            movie?.backdrop_path || movie?.poster_path
          }`}
          layout='fill'
          objectFit='cover'
          priority={true}
          alt={movie?.name || movie?.title || movie?.original_name}
        />
      </div>

      <div className='pt-32 md:pt-36 lg:pt-48 xl:pt-68'>
        <div className='md:min-h-[250px] pt-12 md:pt-20 lg:pt-16'>
          <h1 className='text-2xl lg:text-7xl md:text-4xl font-bold pb-2 max-w-xl'>
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <p className='hidden md:flex md:min-h-[100px] lg:min-h-[200px] max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl pb-2'>
            {movie?.overview}
          </p>
        </div>

        <div className='flex space-x-3'>
          <button className='bannerButton bg-white text-black'>
            <FaPlay className='h-4 w-4 text-black md:h-7 md:w-7' />{" "}
            Play
          </button>
          <button
            className='bannerButton bg-[gray]/70'
            onClick={() => {
              setCurrentMovie(movie);
              setShowModal(true);
            }}>
            <InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8' />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
