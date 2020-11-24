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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle , faUser, faEdit} from '@fortawesome/free-solid-svg-icons';

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
            <MutedLink href="/forum">Back to posts</MutedLink>
            {post &&
            <>  
                {post.title &&
                <Header>                    
                    <h2><ReactMarkdown source={post.title} allowDangerousHtml /> </h2>
                </Header>}
                <Author>
                    {post.author && <>
                        <Icon><FontAwesomeIcon icon={faUser} size="3x"/></Icon>
                        <Info>
                            <AuthorText> {post.author.firstName} {post.author.lastName} {data.countries && (data.countries.results.find(country => country.id === post.author.country).title)}</AuthorText>
                            <AuthorText>{post.author.email}</AuthorText>
                            <AuthorText><FontAwesomeIcon icon={faEdit}/> {new Date(post.createdAt).toLocaleDateString("en-GB", {weekday: "long", year:"numeric", month:"long", day:"numeric", hour:"2-digit", minute: "2-digit"})}</AuthorText>
                        </Info> 
                    </>}
                </Author>
                <Body>
                    <p><ReactMarkdown source={post.content} allowDangerousHtml /></p>
                </Body>
                <Footer>
                    <MutedText>{post.category && post.category.title}</MutedText>
                    {post.userSubscribed ? <MutedText>You are following this post</MutedText>: <MutedText>Please Subscribe</MutedText>}
                    <MutedText>Last Updated: {new Date(post.updatedAt).toLocaleDateString("en-GB", {weekday: "long", year:"numeric", month:"long", day:"numeric", hour:"2-digit", minute: "2-digit"})}</MutedText>
                    <MutedText>{post.viewCount} Views </MutedText>
                </Footer>

                <Replies>
                    <h2><a className="btn btn-sm btn-success" onClick={() => setShowForm(!showForm)}>{showForm ? "Hide Form" : "New Reply"}</a> Replies </h2>

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
                            <Reply>
                                <Icon><FontAwesomeIcon icon={faUserCircle} size="4x"/></Icon>
                                <Info>
                                <MutedText>{reply.author.firstName} {reply.author.lastName}</MutedText>
                                <h5>{reply.title}</h5>
                                <p>{reply.content}</p>
                                </Info>
                            </Reply>
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

const DetailContainer = styled.div`
    margin: 2rem 0; 
    grid-row: 2;
    width: 80%; 
    justify-self: center; 
    display: grid; 
    grid-template-rows: 1% fit-content(5%) max-content fit-content(8%) fit-content(5%) auto; 
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
    float: left;
`
const styledDiv = styled.div`
    margin: 1rem; 
`
const Reply = styled.div`
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: 20% 40%; 
    justify-content: center;
`

const Header = styled(styledDiv)`
    grid-row: 2;
    text-align: center;
`
const Body = styled(styledDiv)`
    grid-row: 3; 
    text-align: center; 
`

const Author = styled(styledDiv)`
    grid-row: 4; 
    display: grid;
    grid-template-columns: 20% 40%; 
    width: 50%; 
`
const AuthorText = styled.p`
    margin: 0;
    font-size: 0.8rem;
`

const Icon = styled.div`
    grid-column: 1;
`
const Info = styled.div`
    grid-column: 2;
`

const Footer = styled(styledDiv)`
    grid-row: 5;
    display: flex; 
    justify-content: space-between
`

const Replies = styled(styledDiv)`
    grid-row: 6;
    display: grid; 
`