/* eslint-disable no-unused-vars */
import SearchResult from "./SearchResult";
import {connect} from "react-redux";
import React from "react";
import * as flightsActionCreators from "../../actions/flights_actions";

const SearchResultCon = (props) => {
	return <SearchResult 
		{...props} 
		searchResult={props.searchResult}
		searchFlights={props.searchFlights}
	/>;
};

const mapStateToProps= state => ({
	searchResult:state.flights.search_result
});

export default connect(mapStateToProps, flightsActionCreators)(SearchResultCon);