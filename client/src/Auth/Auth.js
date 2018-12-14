class Auth {
	static authenticateToken = token => localStorage.setItem("jwtToken", token);
	static isUserAuthenticated = () => localStorage.getItem("jwtToken") !== null;
	static deauthenticateToken = () => localStorage.removeItem("jwtToken");
	static getToken = () => localStorage.getItem("jwtToken");
}

export default Auth;