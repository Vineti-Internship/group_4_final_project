import React from "react";

class SearchForm extends React.Component {
	render() {
		return (
			<div className="search-form">
				<form>
					<label>From:</label>
					<input type="text"/>
					<label>To:</label>
					<input type="text"/>
					<button type="submit">Search</button>
				</form>
			</div>
		);
	}
}

export default SearchForm;
