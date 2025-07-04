import { createContext, useState } from "react";


let userContext = createContext();

export const UserProvider = ({ children }) => {

    let [userName, setUsername] = useState("Karthi");

    return <userContext.Provider value={{ userName, setUsername }}>
        {children}
    </userContext.Provider>
}

export default userContext