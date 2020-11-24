import React, {useContext, useEffect, useState} from 'react'; 
import styled from 'styled-components';
import ForumKit from '../functions/ForumKit'; 
import {Button} from '../styles/Button'; 
import {UserContext} from '../context/UserContext'; 
import FormElement from '../components/FormElement';
import Colors from '../constants/colors'; 
import {Title} from '../styles/Title';
import {useHistory} from 'react-router-dom';

export default function PostCreatePage() {
    const {user} = useContext(UserContext); 
    const forumKit = new ForumKit();
    const history = useHistory();
    const [fields, setFields] = useState({
        title: null, 
        content: null, 
        category: null
    })
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        async function getCategories() {
            console.log(user.token);
            const fetched_categories = await forumKit.getCategories({token: user.token}); 
            setCategories(fetched_categories);
        }
        if(user.token) getCategories();
    }, [user])

    const handleNewPost = async() => {
        await forumKit.addPost({token: user.token, payload: fields}); 
        history.push({
            pathname: "/forum", 
            reload: true
        });
    }

    return (
        <>
        <StyledDiv>
            <Title>New Post</Title>
            <FormElement type="text" name="Title" var="title" onChange={(e) => {setFields({...fields, title: e.target.value})}}/>
            <FormElement type="textarea" name="Content" var="content" rows={8} onChange={(e) => {setFields({...fields, content: e.target.value})}}/>
            {categories && <FormElement type="select" name="Category" var="category" values={categories.results} onChange={(e) => {
                setFields({...fields, category: e.target.value})}}/>}
            <ButtonContainer><Button onClick={handleNewPost}>Save</Button></ButtonContainer>
        </StyledDiv>
        </>
    )
}

const StyledDiv = styled.div`
    grid-row: 2; 
    width: 60%; 
    justify-self: center; 
    align-self: center;
    color: ${Colors.white}
`
const ButtonContainer = styled.div`
    display: flex; 
    justify-content: center; 
`