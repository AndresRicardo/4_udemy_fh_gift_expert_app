import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs,js";

const useFetchGifs = (category) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getImages = async (category) => {
		const gifs = await getGifs(category);
		setImages(gifs);
		setIsLoading(false);
	};

	useEffect(() => {
		getImages(category);
	}, []);

	return {
		images,
		isLoading,
	};
};

useFetchGifs.propTypes = {
	category: PropTypes.array,
};

export default useFetchGifs;
