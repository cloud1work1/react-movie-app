import React, {useState, useEffect} from 'react';
import MovieItem from './MovieItem';
import axios from 'axios';

const Movielist = () => {
    const [movies, setMovies]= useState([]);
    const key = '107aa10e3506441f9f477c38fadb30ca';
    useEffect(() => {
        const getMoviesData = async()=>{
            const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`);
            console.log('data', response.data);
            setMovies(response.data.results);
        };
        getMoviesData();
    }, [])
    return (
        <div>
            <div className="container">
                <div className="row">
                    {movies.map((movie) => (
                        <MovieItem key={movie.id} movie={movie}/>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default Movielist;