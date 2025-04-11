import React from 'react';
import MovieCard from '../components/cards';
import movies from '../JSON/movie.json';

const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-1">
   {movies.map((item,index) =>(
     <MovieCard data={item} idx={index} />
    ))}
    </div>
  );
};

export default Home;
