import useFetchGifs from "../hooks/useFetchGifs";
import PropTypes from "prop-types";
import { GifItem } from "./";

export const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>

			{isLoading && <h4>Loading...</h4>}

			<div className="card-grid">
				{images.map((item) => {
					return <GifItem key={item.id} image={item} />;
				})}
			</div>
		</>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string,
};
