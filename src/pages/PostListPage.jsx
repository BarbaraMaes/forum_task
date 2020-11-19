import React, { useContext, useEffect } from 'react'; 
import { DataContext } from '../context/DataContext'; 
import { UserContext } from '../context/UserContext';
import ForumKit from '../functions/ForumKit';

export default function PostListPage() {
    const {data, setData} = useContext(DataContext); 
    const {user} = useContext(UserContext);
    const forumKit = new ForumKit(); 

    useEffect(() => {
        if(!data) {
            getData();
            //fetch posts, 
            //update context, 
        }

        //don't fetch posts if context isn't null. 
        //fetch posts when coming from detail or create page. 
    }, [user]) 

    const getData = async() => {
        console.log(user.token); 
        const token = user.token.trim();
        const data = await forumKit.getPosts({token: user.token}); 
        setData(data);
        console.log(data); 
    }

    return (
        <div>
            
        </div>
    )
}

/* 
List all posts
When the users clicks on a post they should navigate to the detail page for
that post
Add link so user can navigate to Post Create Page
*/