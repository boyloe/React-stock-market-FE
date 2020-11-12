import React, {useState} from 'react'
import { Form, Jumbotron as Jumbo, Container, Button, Row, Col } from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import { render } from 'react-dom'

export default function SignupForm(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        let user = {
            username,
            password
        }

        props.signUp(user)
        setUsername("")
        setPassword("")
        showAlerts()
        return <Redirect to="/" />
        
    }


    const handleChange = ({target}) => {
        return target.type === "username" 
            ?  setUsername(target.value) 
            :  setPassword(target.value)

    }

    const showAlerts = () => props.alerts.map(alert => <p>{alert}</p>)
    
    
    return (
        <Jumbo className='bg-dark'>
            <Container>
                <Row>
                    <Col>
                        <h1 className="display-4">Sign in for Fat Stocks!</h1>
                    </Col>
                </Row>
                <Row> 
                    <Col>
                        <p className="lead">We Bring You Stocks on Stocks on Stocks! </p>
                    </Col>
                </Row>
                <Form onSubmit ={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Row>
                            <Col lg={4}>
                                <Form.Control type="username" placeholder="Enter Username" onChange={handleChange}/>
                                <Form.Text className="text-muted">                        
                                </Form.Text>
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Row>
                            <Col lg={4}>
                                <Form.Control type="password" placeholder="Password" />
                                </Col>
                        </Row>
                    </Form.Group>
                    <Button variant="secondary" type="submit" className="mr-5">
                        Login
                    </Button>
                    <Button variant="secondary" type="">
                        Create New User
                    </Button>
                </Form>
            </Container>
        </Jumbo>
            
        
    )
}
