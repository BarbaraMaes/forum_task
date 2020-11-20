import React, {useState, createContext, useEffect} from 'react'; 
import AuthKit from '../functions/AuthKit';
export const UserContext = createContext({}); 


export default function UserProvider({children}) {
    const authKit = new AuthKit();
    const [user, setUser] = useState({
        token: null, 
        user: null
    }); 

    useEffect(() => {
        const token = authKit.getToken(); 
        if(token) {
            const getUser = async() => {
                const user = await authKit.getMe({token: token}); 
                setUser({user:user, token: token})
            }
            getUser();
        }
    }, [])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
