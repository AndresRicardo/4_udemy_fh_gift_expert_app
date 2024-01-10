import { useState } from "react";
import PropTypes from "prop-types";

useState;

export const AddCategory = ({ onNewcategory }) => {
	const [inputValue, setInputValue] = useState("");

	const onChange = (event) => {
		setInputValue(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		if (inputValue.trim().length <= 1) return;

		setInputValue("");
		onNewcategory(inputValue);
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Buscar gifs"
				value={inputValue}
				onChange={onChange}
			/>
		</form>
	);
};

AddCategory.propTypes = {
	onNewcategory: PropTypes.func,
};
