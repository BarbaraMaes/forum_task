import React from 'react'; 
import styled from "styled-components";
import Colors from '../constants/colors';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag , faUser, faEdit} from '@fortawesome/free-solid-svg-icons';

export default function PostItem({post, onClick}) {
    return (
    <PostContainer onClick={onClick}>
        <Pinned>
            {post.isPinned && <FontAwesomeIcon icon={faFlag}/> }
        </Pinned>
        {post.title && <Body>
        <PostTitle><ReactMarkdown source={post.title} allowDangerousHtml /></PostTitle>
        {post.content && <ReactMarkdown source={post.content} allowDangerousHtml />}
        </Body>}
        <Author>
            <p><FontAwesomeIcon icon={faUser}/> {post.author && post.author.firstName + " " + post.author.lastName}</p>
            <p><FontAwesomeIcon icon={faEdit}/> Created: {new Date(post.createdAt).toLocaleDateString("en-GB", {weekday: "long", year:"numeric", month:"long", day:"numeric", hour:"2-digit", minute: "2-digit"})}</p>
        </Author>
    </PostContainer>
    )
}

const PostTitle = styled.h3`
    Color: ${Colors.yellow};
`
const Pinned = styled.div`
    grid-column : 1;
`

const PostContainer = styled.div`
    color: ${Colors.white}; 
    border: ${Colors.ivory} 1.5px inset;
    display: grid; 
    grid-template-columns: 5% auto 30%; 
    margin: 1rem 2rem; 
    padding: 1rem; 
    box-shadow: 2px 1px 2px 1px${Colors.ivory};

    &:hover {
        border: ${Colors.red} 1.5px inset; 
        box-shadow: 2px 1px 2px 1px${Colors.red};
    }
`

const Author = styled.div`
    grid-column : 3;
`
const Body = styled.div`
    grid-column : 2;
`
