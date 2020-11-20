import React, {useContext, useEffect, useState} from 'react'; 
import styled from 'styled-components';
import ForumKit from '../functions/ForumKit'; 
import {Button} from '../styles/Button'; 
import {UserContext} from '../context/UserContext'; 
import FormElement from '../components/FormElement';
import Colors from '../constants/colors'; 
import {Title} from '../styles/Title';

export default function PostCreatePage() {
    const {user} = useContext(UserContext); 
    const forumKit = new ForumKit();
    const [fields, setFields] = useState({
        title: null, 
        content: null, 
        category: null
    })
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        async function getCategories() {
            const fetched_categories = await forumKit.getCategories({token: user.token}); 
            console.log(fetched_categories);
            setCategories(fetched_categories)
        }
        getCategories();
    }, [])

    const handleNewPost = async() => {

    }

    return (
        <>
        <StyledDiv>
            <Title>New Post</Title>
            <FormElement type="text" name="Title" var="title" onChange={(e) => {setFields({...fields, email: e.target.value})}}/>
            <FormElement type="textarea" name="Content" var="content" onChange={(e) => {setFields({...fields, password: e.target.value})}}/>
            <FormElement type="select" name="Category" var="category" rows={16} values={categories} onChange={(e) => {
                setFields({...fields, category: e.target.value})}}/>
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
/* 
This page should render a form where the user can create a new Post.
The form should contain
title
content
category Please see API below for list of all categories)
When a post is created successfully, the user should automatically navigate to
the Post List Page

*/