import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const StockInfo = ({
  symbol, // AAPL
  companyName, // Apple Inc.
  primaryExchange, // Nasdaq Global Select
  latestPrice, // 169.48
  latestSource, // Close
  week52High, // 176.24
  week52Low, // 108.25
  logo,
  showHistory, 
  quoteHistory,
  quoteHistoryReverse
}) => (
  <Container>
    <Card >
      <Card.Body d-flex flex-wrap >
        <Image className="p-2" src={logo} alt='' />
        <Card.Title className="p-2"><strong>{symbol} {companyName}</strong></Card.Title>
      </Card.Body>
      <ListGroup className="list-group list-group-flush">
        <ListGroup.Item ><strong>{latestSource}</strong> <span className="text-primary">{latestPrice}</span></ListGroup.Item>
        <ListGroup.Item ><strong>52 Week High</strong> <span className="text-success">{week52High}</span></ListGroup.Item>
        <ListGroup.Item ><strong>52 Week Low</strong> <span className="text-danger">{week52Low}</span></ListGroup.Item>
        <ListGroup.Item ><strong>Exchange</strong> {primaryExchange}</ListGroup.Item>
      </ListGroup>

    </Card>

    {/* <Container className="mt-3">
    <Button
      variant="dark"
      block
      onClick={this.onClickShowHistory}
    >
      {showHistory
        ? "Hide Previous Quotes"
        : "Show Previous Quotes"}
    </Button>
    </Container> */}

    <Container className="mt-3">
    {showHistory && !!quoteHistory && (
      <Container>
        <h2 className="text-center">Previous Quotes</h2>
        {quoteHistoryReverse.map((quoteHistoryItem, index) => {
          return (
            <Container key={"quote" + index}>
              <StockInfo {...quoteHistoryItem} />
              <hr />
            </Container>
          );
        })}
      </Container>
    )}
    </Container>
  </Container>
)

export default StockInfo
