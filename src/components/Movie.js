import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

//state가 필요없는 경우에는 class component가 될 필요가 없고 function component로 충분
function Movie({id, year, title, summary, poster, genres}){
    return <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">{(genres != undefined)? genres.map((genre, index) => <li className="genres__genre" key={index}>{genre}</li> ) : ''}</ul>
            <p className="movie__summary">{summary.slice(0, 150)}...</p>
        </div>
    </div>
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,//medium_cover_image
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;