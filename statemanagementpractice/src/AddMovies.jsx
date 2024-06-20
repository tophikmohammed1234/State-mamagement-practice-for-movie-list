import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

function AddMovies() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");
	const [movies, setMovies] = useContext(MovieContext);

	const updateName = (e) => {
		setName(e.target.value);
	};

	const updatePice = (e) => {
		setPrice(e.target.value);
	};

	const updateImg = (e) => {
		setImage(e.target.value);
	};

	const AddMovies = (e) => {
		e.preventDefault();
		setMovies((prevMovies) => [
			...prevMovies,
			{
				name: name,
				price: price,
				image: image,
			},
		]);
	};
	return (
		<form className="form" onSubmit={AddMovies}>
			<input
				className="form"
				type="text"
				placeholder="Name of The movie"
				name="name"
				value={name}
				onChange={updateName}
			/>
			<br />
			<br />
			<input
				className="form"
				type="text"
				placeholder="Price"
				name="price"
				value={price}
				onChange={updatePice}
			/>
			<br />
			<br />
			<input
				className="form img"
				type="file"
				name="image"
				value={image}
				onChange={updateImg}
			/>
			<br />
			<br />
			<button className="form">Submit</button>
			<br />
			<br />
		</form>
	);
}

export default AddMovies;
