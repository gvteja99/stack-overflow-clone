import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MyMessages.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const MyMessages = () => {
    const users = [{
        picture: 'http://placekitten.com/200/300',
        username: 'Username test'
    },
    {
        picture: 'http://placekitten.com/200/300',
        username: 'Username test'
    },
    {
        picture: 'http://placekitten.com/200/300',
        username: 'Username test'
    },
    {
        picture: 'http://placekitten.com/200/300',
        username: 'Username test'
    },
    {
        picture: 'http://placekitten.com/200/300',
        username: 'Username test'
    },
    {
        picture: 'http://placekitten.com/200/300',
        username: 'Username test'
    },
    {
        picture: 'http://placekitten.com/200/300',
        username: 'Username test'
    },
    {
        picture: 'http://placekitten.com/200/300',
        username: 'Username test'
    }, {
        picture: 'http://placekitten.com/200/300',
        username: 'Username test'
    }]

    const messages = [{
        sender: '6270916b10d71bab3c5630fe',
        receiver: '627094d1b97b5ee983f39917',
        body: 'Message 1 from Phillip the quick brown fox jumps over the lazy dog'
    },
    {
        sender: '627094d1b97b5ee983f39917',
        receiver: '6270916b10d71bab3c5630fe',
        body: 'Message 1 from Bobby the quick brown fox'
    },
    {
        sender: '6270916b10d71bab3c5630fe',
        receiver: '627094d1b97b5ee983f39917',
        body: 'Message 2 from Phillip'
    },
    {
        sender: '6270916b10d71bab3c5630fe',
        receiver: '627094d1b97b5ee983f39917',
        body: 'Message 2 from Phillip'
    },
    {
        sender: '6270916b10d71bab3c5630fe',
        receiver: '627094d1b97b5ee983f39917',
        body: 'Message 2 from Phillip'
    },
    {
        sender: '6270916b10d71bab3c5630fe',
        receiver: '627094d1b97b5ee983f39917',
        body: 'Message 2 from Phillip'
    },
    {
        sender: '6270916b10d71bab3c5630fe',
        receiver: '627094d1b97b5ee983f39917',
        body: 'Message 2 from Phillip'
    },
    {
        sender: '6270916b10d71bab3c5630fe',
        receiver: '627094d1b97b5ee983f39917',
        body: 'Message 2 from Phillip'
    },
    {
        sender: '6270916b10d71bab3c5630fe',
        receiver: '627094d1b97b5ee983f39917',
        body: 'Message 2 from Phillip'
    },
    {
        sender: '6270916b10d71bab3c5630fe',
        receiver: '627094d1b97b5ee983f39917',
        body: 'Message 2 from Phillip'
    }]

    const userID = JSON.parse(localStorage.getItem('user'))._id.toString()
    console.log(userID)

    return (
        <div className='my-messages-container'>
            <div className='my-messages-list me-3'>
                <div className='my-messages-header text-center pt-2 pb-2'>
                    <strong>My messages</strong>
                </div>
                <div style={{ overflow: 'auto', height: '75vh' }}>
                    <ListGroup variant='flush'>
                        {users.map(user => (
                            <ListGroup.Item>
                                <Row>
                                    <Col md={3}>
                                        <Image src={user.picture} roundedCircle />
                                    </Col>
                                    <Col md={9}>
                                        <p className='my-messages-name-list'>{user.username}</p>
                                        <p className='my-messages-name-list'>Messages example</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                        ))}
                    </ListGroup>
                </div>
            </div>
            <Container className='my-messages-posts-container'>
                <div style={{ overflow: 'auto', height: '65vh' }}>
                    {messages.map(message => (
                        <div className={message.sender === userID ? 'mb-3 my-messages-right' : 'mb-3 my-messages-left'}>
                            <div className='my-messages-post' style={{ backgroundColor: message.sender === userID ? '#F48023' : '#242629' }}>
                                {message.body}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
            <Container>
                <textarea type='text-area' className='my-messages-input me-3' rows={3} cols={70} />
                <Button variant='dark' className='mt-3' size='lg'>Send message</Button>
            </Container>
        </div>
    )
}

export default MyMessages