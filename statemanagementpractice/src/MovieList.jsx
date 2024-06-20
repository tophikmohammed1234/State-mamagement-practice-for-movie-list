import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";
import Movie from "./Movie";

function MovieList() {
	const [movies, setMovies] = useContext(MovieContext);
	return (
		<div>
			{movies.map((movie) => (
				<div>
					<Movie name={movie.name} price={movie.price} key={movie.id} />
					<div>
						<img src={movie.img} alt="" width="20%"/>
					</div>
				</div>
			))}
		</div>
	);
}

export default MovieList;
