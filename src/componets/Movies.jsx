import { Movie } from "./Movie";

function Movies(props) {
    const { movies = [] } = props;

    return <div className="movies">
        {movies.length ? (
            movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
        ) : (
            <h3>Not Found</h3>
        )}
    </div>
}

export { Movies };