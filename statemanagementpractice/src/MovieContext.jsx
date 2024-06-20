import React, { useState, createContext } from "react";
export const MovieContext = createContext();

function MovieProvider(props) {
	const [movies, setMovies] = useState([
		{
			name: "Hary Poter",
			price: "$10",
			id: "23124",
			img: "https://c8.alamy.com/comp/2C7GK8C/harry-potter-and-the-prisoner-of-azkaban-movie-poster-2C7GK8C.jpg",
		},
		{
			name: "Game of Thrones",
			price: "$10",
			id: "2566124",
			img: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/12/gotmulti.jpg",
		},
		{
			name: "Inception",
			price: "$10",
			id: "23524",
			img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_ae.jpg",
		},
	]);

	return (
		<MovieContext.Provider value={[movies, setMovies]}>
			{props.children}
		</MovieContext.Provider>
	);
}

export default MovieProvider;
