const ROOT_URL = "https://lab.willandskill.eu"; 
const POST_URL = `${ROOT_URL}/api/v1/forum/posts/`;
const CATEGORY_URL = `${ROOT_URL}/api/v1/forum/categories/`;

export default class {

    getCategories = async(args) => {
        const {token} = args; 
        try {
            const response = await fetch(CATEGORY_URL, {
                method: "GET",
                headers: {
                    "Content-Type" : 'application/json',
                    "Authorization" : 'Bearer ' + token
                }
            }); 
            const data = await response.json(); 
            return(data);
        } catch (error) {
            console.log(error);
        }
    }

    addPost = async(args) => {
        const {token, payload} = args; 
        console.log(payload);
        try {
            const response = await fetch(POST_URL, {
                method: "POST",
                headers: {
                    "Content-Type" : 'application/json',
                    "Authorization" : 'Bearer ' + token
                },
                body: JSON.stringify(payload)
            }); 
            const data = await response.json(); 
            return(data);
        } catch (error) {
            console.log(error);
        }
    }

    getPosts = async(args) => {
        const {token} = args
        try {
            const response = await fetch(POST_URL, {
                method: "GET",
                headers: {
                    "Content-Type" : 'application/json',
                    "Authorization" : 'Bearer ' + token
                }
            }); 
            const data = await response.json(); 
            return(data);
        } catch (error) {
            console.log(error);
        }
    }

    getPostDetail = async(args) => {
        const {token, id} = args
        try {
            const response = await fetch(`${POST_URL}${id}`, {
                method: "GET",
                headers: {
                    "Content-Type" : 'application/json',
                    "Authorization" : 'Bearer ' + token
                },
            }); 
            const data = await response.json(); 
            return(data);
        } catch (error) {
            console.log(error);
        }
    }

    postReply = async(args) => {
        const {token, payload} = args
        try {
            const response = await fetch(`${POST_URL}`, {
                method: "POST",
                headers: {
                    "Content-Type" : 'application/json',
                    "Authorization" : 'Bearer ' + token
                },
                body: JSON.stringify(payload)
            }); 
            const data = await response.json(); 
            return(data);
        } catch (error) {
            console.log(error);
        }
    }

    getReplies = async(args) => {
        const {token, id} = args
        try {
            const response = await fetch(`${POST_URL}${id}/replies`, {
                method: "GET",
                headers: {
                    "Content-Type" : 'application/json',
                    "Authorization" : 'Bearer ' + token
                },
            }); 
            const data = await response.json(); 
            return(data);
        } catch (error) {
            console.log(error);
        }
    }
}
