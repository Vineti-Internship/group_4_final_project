import React from "react";
import Spinner from "../Spinner";

class SearchResult extends React.Component {
	constructor(props){
		super(props);
		this.state={
			searchResult:[],
			dataLoaded:false
		};
	}

	async componentDidMount(){
		const [from, to] = decodeURIComponent(this.props.match.params.search_url).split("+");
		await this.props.searchFlights({from, to});
		this.setState({searchResult:this.props.searchResult, dataLoaded:true});
	}

	capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

	render() {
		if(this.state.dataLoaded)
			return (
				this.state.searchResult.length? 
					<div className="search-result">
						{this.state.searchResult.map((flight, index) => {
							return (
								<div key={flight.id} className={`search-res-#${index}`}>
									<div className="card" style={{width:"auto", display:"inline-block", backgroundColor:"whitesmoke"}} >
										<div className="card-body">
											<h5 className="card-title">From: {this.capitalize(flight.from)} <br/> To: {this.capitalize(flight.to)}</h5>
											<h4 className="card-text">Scheduled departure: {flight.flight_start} <br/> Scheduled arrival: {flight.flight_end} <br/> Airplane capacity: {flight.airplane.capacity}</h4>
											<div align="right">
												<button className="btn btn-primary">More</button>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					:<h1>No flights were found... :(</h1>
			);
		return <Spinner/>
	}
}

export default SearchResult;
