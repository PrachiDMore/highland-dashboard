"use client"
import { useRouter } from "next/navigation";

const { createContext, useContext, useState, useEffect } = require("react");


const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [token, setToken] = useState("");
	const [user, setUser] = useState();

	return <AuthContext.Provider value={{ user, token, setToken }}>
		{children}
	</AuthContext.Provider>
}

const UseAuthContext = () => {
	return useContext(AuthContext);
}

export { AuthContextProvider, UseAuthContext }