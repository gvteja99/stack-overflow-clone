import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './Search.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import API_URL from '../../apiConfig'

const Search = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const { search_query } = useParams()

    useEffect(() => {
        axios.get(`${API_URL}/api/question/search/${search_query}`)
        .then(res => {
            const data = res.data.posts

            for (let i = 0; i < data.length; i++) {
                let desc = '';
    
                if (data[i].type === 'question') {
                    desc = data[i].body
                    let plainDesc = desc.replace(/<[^>]+>/g, '');
    
                    data[i].body = plainDesc
    
                } else if (data[i].type === 'answer') {
                    desc = data[i].answer
                    let plainDesc = desc.replace(/<[^>]+>/g, '');

                    plainDesc = plainDesc.replace('&nbsp;', ' ')
    
                    data[i].answer = plainDesc
                }           
            }
       
            setPosts(data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [search_query])

    const handleNewest = () => {
        setPosts([].concat(posts).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
    }

    const handleRelevance = () => {
        setPosts([].concat(posts).sort((a, b) => b.score - a.score))
    }

    return (
        <div className='search-container mb-3'>
            <Container className='mt-3 search-head-container'>
                <div>
                    <h3 className='search-results-title'>Search results</h3>
                    <Button className='search-ask-question-button' onClick={() => navigate('/askQuestion')}>Ask question</Button>
                </div>
            </Container>
            <Container className='mt-3'>
                <div>
                    <p className='num-results mt-2'>{posts.length} results</p>
                    <ButtonGroup style={{ marginLeft: '52%' }}>
                        <Button variant='outline-secondary' onClick={handleRelevance}>Relevance</Button>
                        <Button variant='outline-secondary' onClick={handleNewest}>Newest</Button>
                    </ButtonGroup>
                </div>
            </Container>
            <hr className='search-hr' />
            {posts.map(post => (
                <div>
                    <Container>
                        <Row>
                            {post.type === 'question' ?
                                <Col md={2} className='text-center' style={{ width: '80px' }}>
                                    <strong className='vote-number'>{post.score}</strong>
                                    <p className='vote-text'>votes</p>
                                    <div className={post.answer_id.filter(answer => answer.isBest === true).length > 0 ? 'answered' : null}>
                                        <strong className={post.answer_id.filter(answer => answer.isBest).length > 0 ? 'answer-number' : 'unanswered-number'}>{post.answer_id.length}</strong>
                                        <p className={post.answer_id.filter(answer => answer.isBest).length > 0 ? 'answer-text' : 'unanswered-text'}>answers</p>
                                    </div>
                                </Col> :
                                <Col md={2} className='text-center' style={{ width: '80px'}}>
                                    <strong className='vote-number' style={{color: post.isBest ? '#47A868' : '#6A747C'}}>{post.score}</strong>
                                    <p className='vote-text' style={{color: post.isBest ? '#47A868' : '#6A747C'}}>votes</p>
                                </Col>}
                            <Col md={10} style={{ width: '700px' }}>
                                <Link to='/' className='search-question-title mb-2'>{post.type === 'question' ? 'Q' : 'A'}: {post.type === 'question' ? post.title : post.question_id.title}</Link>
                                <p className='search-question-desc mb-1'>{post.type === 'question' ? post.body : post.answer}</p>
                                {post.type === 'question' ? post.tags.map(tag => (
                                    <div className='search-tag-block me-1' onClick={() => navigate(`/questions/tagged/${tag.name}`)}>{tag.name}</div>
                                )) :
                                post.question_id.tags.map(tag => (
                                    <div className='search-tag-block me-1' onClick={() => navigate(`/questions/tagged/${tag.name}`)}>{tag.name}</div>
                                ))}
                                <p className='search-author'>{post.type === 'question' ? 'Asked' : 'Answered'} 
                                    {' ' + new Date(post.createdAt).toLocaleDateString('en-us', { year: "numeric", day: 'numeric', month: "short" })} by 
                                    <Link to='/users' className='search-name-link'> {post.type === 'question' ? post.user.username : post.user_id.username}</Link>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                    <hr className='search-hr' />
                </div>
            ))}
        </div>
    )
}

export default Search