import React from 'react';

const MovieItem = (props) => {
    const baseurl ='https://image.tmdb.org/t/p/w500/';
    return (
        <div className="card col-md-4 mt-1">
            <div className="card-body">
                <img src={`${baseurl}${props.movie.poster_path}`} className="img-fluid"/>
                <h3>Rating: {props.movie.vote_average}</h3>
            </div>
        </div>
    )
}

export default MovieItem;