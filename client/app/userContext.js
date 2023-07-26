'use client'

import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

	useEffect(() => {
		fetch('/api/check-session')
		  .then(res => res.json())
		  .then(data => setUser(data))
	  }, [])
	  console.log(user)

	function handleLogout(e) {
		e.preventDefault()
		fetch('/api/logout', {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(setUser(null))
	}

    return (
        <UserContext.Provider value={{ user, setUser, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
}