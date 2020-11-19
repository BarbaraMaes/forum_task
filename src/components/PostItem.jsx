import React from 'react'; 
import styled from "styled-components";
import {SmallButton} from '../styles/Button';
import Colors from '../constants/colors';

export default function PostItem({post, onClick}) {
    return (
        <PostContainer onClick={onClick}>
            <Header>
                <h3>{post.title && post.title}</h3>
            </Header>
            <div>
                <p>{post.content && post.content}</p>
            </div>
            <Footer>
                <p>{post.author && post.author.firstName + " " + post.author.lastName}</p>
                <p>Created at: {post.createdAt}</p>
                <SmallButton onClick={onclick}>View</SmallButton>
            </Footer>
            <StyledLine />
        </PostContainer>
    )
}

const PostContainer = styled.div`
    color: ${Colors.white}; 
    text-align: center; 
`

const StyledLine = styled.hr`
    border-bottom: ${Colors.grey} 1px solid; 
`

const Footer = styled.div`
    display: flex;
    justify-content: space-around;
`
const Header = styled.div`
    width: fit-content;
    margin: auto; 

    &:hover {
        background: ${Colors.ruby}
    }
`
