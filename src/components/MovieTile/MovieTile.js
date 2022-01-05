
const MovieTile = ({movie, selectMovie}) => {

  const handleSelectMovieClick = () => {
    selectMovie(movie);
  }
  
  return (
  <div className="movie-tile" onClick={handleSelectMovieClick}>
    <img src={movie.imageUrl} className="movie-image" alt={movie.title}/>
  </div>
  )
};


export default MovieTile;
