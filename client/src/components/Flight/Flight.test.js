/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { mount } from "enzyme";
import Flight from "./Flight";
import FlightForm from "./FlightForm";

describe("Flight component", () => {
	let flight;
	describe("parent component", () => {

		beforeEach(() => {
			flight = shallow(<Flight />);
		});

		test("renders one child component", () => {
			expect(flight.find(FlightForm).length).toBe(1);
		});

		test("renders 5 inputs", () => {
			expect(flight.find("input").length).toBe(5);
		});

		test("has correct initial state", () => {
			const state = flight.state();
			expect(state).toEqual({
				n: 0
			});
		});

		describe("when clicking on the button", () => {
			let button;
			beforeEach(() => {
				button = component.find("button");
			});

			test("updates the state", () => {
				const oldState = component.state();
				button.simulate("click");
				const newState = component.state();
				expect(newState.n).toBe(oldState.n+1);
			});

			test("updates the text of child component", () => {
				const oldProps = component.find(Child).props();
				button.simulate("click");
				const newProps = component.find(Child).props();
				expect(newProps.n).toBe(oldProps.n+1);
			});
		});
	});
});