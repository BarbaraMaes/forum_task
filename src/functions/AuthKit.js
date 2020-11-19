const ROOT_URL = "https://lab.willandskill.eu"; 
const REGISTER_URL = `${ROOT_URL}/api/v1/auth/users/`;
const LOGIN_URL = `${ROOT_URL}/api/v1/auth/api-token-auth/`; 
const ME_URL = `${ROOT_URL}/api/v1/me/`;
const COUNTRIES_URL = `${ROOT_URL}/api/v1/countries/`

/* 
Create AuthKit to handle authentication and setting token to localStorage

pelle@willandskill.se
pellesvanslos
*/

export default class {
    register = async(args) => {
        try {
            const response = await fetch(REGISTER_URL, {
                method: "POST",
                headers: {
                    "Content-Type" : 'application/json'
                },
                body: JSON.stringify(args)
            }); 
            const user = await response.json();
            return(user);
        } catch (error) {
            console.log(error);
        }
    }

    login = async(args) => {
        try {
            const response = await fetch(LOGIN_URL, {
                method: "POST",
                headers: {
                    "Content-Type" : 'application/json'
                },
                body: JSON.stringify(args)
            }); 
            const token = await response.json(); 
            return(token);
        } catch (error) {
            console.log(error);
        }
    }
    
    getMe = async(args) => {
        const {token} = args
        try {
            const response = await fetch(ME_URL, {
                method: "GET",
                headers: {
                    "Content-Type" : 'application/json',
                    "Authorization" : 'Bearer ' + token
                },
            }); 
            const user = await response.json(); 
            return(user);
        } catch (error) {
            console.log(error);
        }
    }

    getCountries = async() => {
        try {
            const response = await fetch(COUNTRIES_URL, {
                method: "GET",
                headers: {
                    "Content-Type" : 'application/json'
                },
            }); 
            const countries = await response.json();
            return(countries); 
        } catch (error) {
            console.log(error);
        }
    }
    
    getToken = () => {
        return localStorage.getItem("token");
    }

    setToken = (args) => {
        const {token} = args;
        localStorage.setItem("token", token);
    }

    clearToken = () => {
        localStorage.clear("token");
    }
}

/*
User Create
const url = ${ROOT_URL}/api/v1/auth/users/
{
email,
password,
country,
firstName,
lastName
}

User Authenticate
const url = ${ROOT_URL}/api/v1/auth/api-token-auth/
const payload = {
email,
password
}

Me
const url = ${ROOT_URL}/api/v1/me/

Country List
const url = ${ROOT_URL}/api/v1/countries/

*/