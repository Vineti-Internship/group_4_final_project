import React from "react";
import {withRouter} from "react-router";

class SearchForm extends React.Component {
	constructor(props){
		super(props);
		this.state={
			search_from:"",
			search_to:"",
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

	handleSearchClick(){
		const search_url=encodeURIComponent(`${this.state.search_from.toLowerCase().replace(" ","")}+${this.state.search_to.toLowerCase().replace(" ","")}`);
		this.setState({search_from:"", search_to:""});
		this.props.history.push(`/search/${search_url}`);
	}

	render() {
		return (
			<center>
				<div className="search-form" style={{width:"40rem"}} >
					<form onSubmit={this.handleSearchClick}>
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text" id="">From | to</span>
							</div>
							<input type="text" required className="form-control from-input" name="search_from" value={this.state.from} onChange={this.handleChange}/>
							<input type="text" required className="form-control to-input" name="search_to" value={this.state.to} onChange={this.handleChange}/>
							<button type="submit" className="search-btn btn btn-primary">Search</button>
						</div>
					</form>
				</div>
			</center>
		);
	}
}

export default withRouter(SearchForm);
