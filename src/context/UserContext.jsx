import React, {useState, createContext} from 'react'; 

export const UserContext = createContext({}); 


export default function DataProvider({children}) {
    const [user, setUser] = useState({
        token: null, 
        user: null
    }); 

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
