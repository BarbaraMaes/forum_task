const ROOT_URL = "https://lab.willandskill.eu"; 
const POST_URL = `${ROOT_URL}/api/v1/forum/posts/`;


/* post castegory list {ROOT_URL}/api/v1/forum/categories/ */

export default class {
    addPost = () => {

    }

    getPosts = () => {

    }

    getPostDetail = () => {

    }

    postReply = () => {
        /* 
        const url = ${ROOT_URL}/api/v1/forum/posts/
        {
            title,
            content,
            parent: {ID OF POST THAT WE WANT TO REPLY TO}
        }
        */
    }

    getReplies = () => {
        //${ROOT_URL}/api/v1/forum/posts/${id}/replies
    }
}

/*
Post List
const url = ${ROOT_URL}/api/v1/forum/posts/

Post Detail
const url = ${ROOT_URL}/api/v1/forum/posts/{id}/

Post Create
const url = ${ROOT_URL}/api/v1/forum/posts/
{
title,
content,
category
}

Post Reply List
const uri = ${ROOT_URL}/api/v1/forum/posts/${id}/replies
Forum Task 6

Post Create Reply
const url = ${ROOT_URL}/api/v1/forum/posts/
{
title,
content,
parent: {ID OF POST THAT WE WANT TO REPLY TO}
}

*/