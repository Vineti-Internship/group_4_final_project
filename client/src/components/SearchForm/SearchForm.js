import React from "react";

class SearchForm extends React.Component {
	render() {
		return (
			<div className="search-form">
				<form>
					<label>From:</label>
					<input type="text" className="from-input"/>
					<label>To:</label>
					<input type="text" className="to-input"/>
					<button type="submit" className="search-btn">Search</button>
				</form>
			</div>
		);
	}
}

export default SearchForm;
