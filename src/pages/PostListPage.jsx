import React, { useContext, useEffect } from 'react'; 
import { DataContext } from '../context/DataContext'; 
import { UserContext } from '../context/UserContext';
import ForumKit from '../functions/ForumKit';
import PostItem from '../components/PostItem';
import styled from 'styled-components';
import {useHistory, useLocation} from 'react-router-dom';
import {Button} from '../styles/Button';

export default function PostListPage() {
    const history = useHistory();
    const location = useLocation();
    const {data, setData} = useContext(DataContext); 
    const {user} = useContext(UserContext);
    const forumKit = new ForumKit(); 

    useEffect(() => {
        if(!data && user.token || location.reload && user.token) {
            getData();
        }

        //don't fetch posts if context isn't null. 
        //fetch posts when coming from create page. 
    }, [user]) 

    const handleGetDetail = async(id) => {
        history.push(`/forum/${id}`); 
    }

    const handleNewPost = async() => {
        history.push(`/new_post`); 
    }

    const getData = async() => {
        const data = await forumKit.getPosts({token: user.token}); 
        setData(data);
    }

    return (
        <View>
            <Button onClick={handleNewPost}>Add New Post</Button>
            {data && data.results.map(item => <PostItem onClick={() => handleGetDetail(item.id)} key={item.id} post={item}/>)}
        </View>
    )
}

const View = styled.div`
grid-row: 2;
margin: 2rem 1rem; 
width: 60%;
justify-self: center;

`

/* 
List all posts
When the users clicks on a post they should navigate to the detail page for
that post
Add link so user can navigate to Post Create Page
*/