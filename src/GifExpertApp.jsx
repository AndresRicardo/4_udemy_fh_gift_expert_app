import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(["dragon ball"]);

	const onAddCategory = (value) => {
		if (categories.includes(value)) return;

		setCategories([value, ...categories]);
	};

	return (
		<>
			<h1>GifExpertApp</h1>

			<AddCategory onNewcategory={onAddCategory} />
			{categories.map((cat) => (
				<GifGrid key={cat} category={cat} />
			))}
		</>
	);
};
