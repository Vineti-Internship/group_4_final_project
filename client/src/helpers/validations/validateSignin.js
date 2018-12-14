export const isEmpty = (obj) => {
	return Object.values(obj).every(x => (x === null || x === ""));
};

export const validate = (data) => {
	let errors = {};

	if(!data.email) {
		errors.email = "is Required";
	}

	if(!data.password) {
		errors.password = "is Required";
	}
	
	return {
		errors,
		isValid: isEmpty(errors)
	};

};