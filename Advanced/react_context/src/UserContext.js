import React, {
    createContext,
    useContext,
    useState
} from "react";

const UserContext = createContext(undefined); 

export const UserProvider = ({children}) => {
    const[user] = useState({
        name: "Rohit",
        email: "Rohit@example.com",
        dob: "25/08/2000"
    });

    return <UserContext.Provider value={{user}}></UserContext.Provider>;
}

export const useUser = () => useContext(UserContext);