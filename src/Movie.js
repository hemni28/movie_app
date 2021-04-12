import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

//state가 필요없는 경우에는 class component가 될 필요가 없고 function component로 충분
function Movie({id, year, title, summary, poster}){
    return <div class="movie">
        <img src={poster} alt={title} title={title}/>
        <div class="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <p className="movie__summary">{summary}</p>
        </div>
    </div>
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,//medium_cover_image
}
export default Movie;