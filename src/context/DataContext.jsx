import React, {useState, createContext, useEffect} from 'react'; 
import AuthKit from '../functions/AuthKit';

export const DataContext = createContext({}); 

export default function DataProvider({children}) {
    const authKit = new AuthKit();
    const [data, setData] = useState({
        posts: null,  
        countries: null
    }); 
    
    useEffect(() => {
        async function getCountries() {
            const countries = await authKit.getCountries(); 
            setData({...data, countries:countries})
        }
        getCountries();
    },[])

    return (
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )
}