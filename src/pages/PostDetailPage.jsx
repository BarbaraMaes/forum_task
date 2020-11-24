import React, { useContext, useEffect, useState } from 'react'; 
import styled from 'styled-components';
import {useParams} from 'react-router-dom'; 
import ForumKit from '../functions/ForumKit';
import {UserContext} from '../context/UserContext';
import Colors from '../constants/colors';
import {SmallButton} from '../styles/Button';
import {DataContext} from '../context/DataContext';
import ReactMarkdown from 'react-markdown';
import FormElement from '../components/FormElement';

export default function PostDetailPage() {
    const forumKit = new ForumKit();
    const {user} = useContext(UserContext);
    const {data} = useContext(DataContext);
    const [post, setPost] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const {id} = useParams();
    const [fields, setFields] = useState({
        title: null, 
        content: null
    })

    const handleSetFields = (e) => {
        setFields({...fields, [e.target.name.toLowerCase()]: e.target.value}); 
    }

    async function fetchPost() {
        const fetched_post = await forumKit.getPostDetail({token: user.token, id: id}); 
        setPost(fetched_post);
    }

    useEffect(() => {   
        if(user.token) { 
            fetchPost();
        } 
    }, [user.token]) 

    const handlePostReply = async() => {
        const response = await forumKit.postReply({
            token: user.token, 
            payload: {
                title: fields.title, 
                content: fields.content, 
                parent: id
            }
        })
        console.log(response); 
        setFields({
            title: null, 
            content: null
        })
        fetchPost();
    }

    return (
        <DetailContainer>
            {post &&
            <> 
                <Author>
                    <MutedLink href="/forum">Back to posts</MutedLink>
                    {post.author &&<MutedText>by: {post.author.firstName} {post.author.lastName} {post.author.email} {data.countries && (data.countries.results.find(country => country.id === post.author.country).title)}</MutedText>}
                    <MutedText>Created: {new Date(post.createdAt).toLocaleDateString("en-GB", {weekday: "long", year:"numeric", month:"long", day:"numeric", hour:"2-digit", minute: "2-digit"})} </MutedText>
                    <MutedText>Last Updated: {new Date(post.updatedAt).toLocaleDateString("en-GB", {weekday: "long", year:"numeric", month:"long", day:"numeric", hour:"2-digit", minute: "2-digit"})}</MutedText>
                    <MutedText>{post.viewCount} Views </MutedText>
                </Author>
                {post.title &&
                <Header>
                     <h3><ReactMarkdown source={post.title} allowDangerousHtml /> <MutedText>{post.category && post.category.title}</MutedText></h3>
                {post.userSubscribed ? <MutedText>You are following this post</MutedText>:<MutedText>Please Subscribe</MutedText> }
                </Header>}
                <Body>
                    <p><ReactMarkdown source={post.content} allowDangerousHtml /></p>
                    <StyledLine />
                    <StyledLine />
                </Body>
                <Replies>
                    <h2>Replies <a className="btn btn-sm btn-success" onClick={() => setShowForm(!showForm)}>{showForm ? "Hide Form" : "New Reply"}</a></h2>

                        {showForm && <FormDiv>
                        {!post.isClosed &&
                            <>
                            <FormElement required value={fields.title} type="text" name="title" var="Title" onChange={(e) => {
                                handleSetFields(e) }}/>
                            <FormElement required value={fields.content} type="textarea" rows={5} name="content" var="Content" onChange={(e) => {
                                handleSetFields(e) }}/> 
                             <SmallButton onClick={handlePostReply}>Add Reply</SmallButton> 
                             </>}
                        </FormDiv>}
                    
                    {post.responses && post.responses.map(reply => {
                        return(
                            <>
                                <p>{reply.title}</p>
                                <p>{reply.content}</p>
                                <MutedText>Author: {reply.author.firstName} {reply.author.lastName}</MutedText>
                                <ShortLine />
                            </>
                        )
                    })}
                </Replies>
            </>
            }
        </DetailContainer>

    )
}

const FormDiv = styled.div`
    margin: 2rem; 
    padding: 0.5rem;
    width: 100%; 
`

const StyledLine = styled.hr`
    border-bottom: ${Colors.grey} 1px solid; 
`

const ShortLine = styled(StyledLine)`
    width: 60%;
`

const DetailContainer = styled.div`
    margin: 2rem 0; 
    grid-row: 2;
    width: 80%; 
    justify-self: center; 
    display: grid; 
    grid-template-rows: 3% max-content max-content auto; 
    color: ${Colors.white}
`
const MutedText = styled.span`
    font-weight: italic; 
    font-size: 0.9rem; 
    color: ${Colors.grey}
`
const MutedLink = styled.a`
    font-weight: italic; 
    font-size: 0.9rem; 
`

const Author = styled.div`
    grid-row: 1; 
    display: flex; 
    justify-content: space-between
`

const Header = styled.div`
    margin-bottom: 1rem; 
    text-align: center; 
    grid-row: 2
`

const Body = styled.div`
    grid-row: 3; 
    text-align: center; 
`
const Replies = styled.div`
    grid-row: 4;
    text-align: center; 
    display: grid; 
    justify-content: center;
`

/* 
This page should render all of the data that is returned from the API for Post
Detail.
A link to navigate to all posts should be present.
VG
Add possibility to add a response

*/