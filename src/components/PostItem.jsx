import React from 'react'; 
import styled from "styled-components";
import {SmallButton} from '../styles/Button';
import Colors from '../constants/colors';

export default function PostItem({post, onClick}) {

    return (
        <PostContainer>
            {post.title && <Header>
            {post.isPinned ? <PinnedTitle>{post.title}</PinnedTitle> : <PostTitle>{post.title}</PostTitle>}
            </Header>}
            <div>
                <p>{post.content && post.content}</p>
            </div>
            <Footer>
                <p>{post.author && post.author.firstName + " " + post.author.lastName}</p>
                <p>Created at: {post.createdAt}</p>
                <SmallButton onClick={onClick}>View</SmallButton>
            </Footer>
            <StyledLine />
        </PostContainer>
    )
}

const PostTitle = styled.h3`

`

const PinnedTitle = styled(PostTitle)`
    Color: ${Colors.ruby};
`

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
`
