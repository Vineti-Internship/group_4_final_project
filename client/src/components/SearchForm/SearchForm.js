import React from "react";
import {withRouter} from "react-router";

class SearchForm extends React.Component {
	constructor(props){
		super(props);
		console.log(props);
		this.state={
			from:"",
			to:"",
			search_url:""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSearchClick = this.handleSearchClick.bind(this);
	}

	handleChange(e){
		const {name, value} = e.target;
		this.setState({
			[name]:value
		});

	}

	handleSearchClick(e){
		e.preventDefault();
		const search_url=encodeURIComponent(`?from=${this.state.from}&?to=${this.state.to}`);
		this.setState({search_url});
		this.props.history.push(`/search/${search_url}`);
	}

	render() {
		return (
			<div className="search-form">
				<form onSubmit={this.handleSearchClick}>
					<label>From:</label>
					<input type="text" className="from-input" name="from" value={this.state.from} onChange={this.handleChange}/>
					<label>To:</label>
					<input type="text" className="to-input" name="to" value={this.state.to} onChange={this.handleChange}/>
					<button type="submit" className="search-btn">Search</button>
				</form>
			</div>
		);
	}
}

export default withRouter(SearchForm);
