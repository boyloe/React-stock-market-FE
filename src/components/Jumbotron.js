import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbo from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import SignupForm from './SignupForm'

export default function Jumbotron({onChangeEnteredSymbol, onKeyDownPressEnter, enteredSymbol, loadQuote, user}) {
    return (
        <Jumbo className='bg-dark'>
                <Row>
                    <Col xs={{span:5}}>
                        <h1 className="display-4">Welcome to Fat Stocks!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <h3 className="display-6">Stocks on Stocks on Stocks! </h3>
                    </Col>
                    <Col lg={{span:3, offset:8}}>
                        Enter Ticker Symbol
                    </Col>
                </Row>
                <Row>
                    <Col xs={{span: 4, offset:8}}className="input-group">
                        <InputGroup>
                            <FormControl
                            value={enteredSymbol}
                            type="text"
                            placeholder="Enter Stock Symbol"
                            aria-label="Symbol"
                            onChange={onChangeEnteredSymbol}
                            onKeyDown={onKeyDownPressEnter}
                            />
                            <InputGroup.Append>
                            <Button variant="info" onClick={loadQuote}>Get Quote</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
        </Jumbo>
    )
}
