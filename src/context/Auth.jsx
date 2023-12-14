"use client"

const { createContext, useContext, useState, useEffect } = require("react");


const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [token, setToken] = useState("");
	const [user, setUser] = useState();
	useEffect(() => {
		if (token) {

		}
	}, [token])

	return <AuthContext.Provider value={{ user, token, setToken }}>
		{children}
	</AuthContext.Provider>
}

const UseAuthContext = () => {
	return useContext(AuthContext);
}

export { AuthContextProvider, UseAuthContext }