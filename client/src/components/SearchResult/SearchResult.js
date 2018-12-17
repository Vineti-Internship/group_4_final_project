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

	normalizeTime = str => 
		`${new Date(str).toISOString().split('T')[0]}\t${new Date(str).toISOString().split('T')[1].slice(0,8)}`

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
											<h4 className="card-text">Scheduled departure: {this.normalizeTime(flight.flight_start)} <br/> Scheduled arrival: {this.normalizeTime(flight.flight_end)} <br/> Available tickets: {flight.airplane.capacity - flight.tickets.length}</h4>
											<div align="right">
												<button className="more-btn btn btn-primary" onClick={()=> this.props.history.push(`/flights/${flight.id}`)}>More</button>
											</div>
										</div>
									</div>
									<br/>
									<br/>
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
