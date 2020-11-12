// import React from 'react'
// import { Form, Jumbotron as Jumbo, Container, Button, Row, Col } from 'react-bootstrap'


// export default function Home() {
//     return (
//         <>     
            
//             <Jumbo   
//                 onChangeEnteredSymbol={this.onChangeEnteredSymbol} 
//                 onKeyDownPressEnter={this.onKeyDownPressEnter} 
//                 enteredSymbol={enteredSymbol} 
//                 loadQuote={this.loadQuote}/>       
//             <Container fluid>
//                 <Row>
//                     {!!error && 
//                         (
//                         <ErrorModal showModal={this.state.showModal} setModalFalse={this.setModalFalse} />            
//                         )
//                     }
//                 </Row>

//             <Row className="mt-3">
//                 <Col>
//                         <h2>Current Stock Info</h2>
//                         {!!quote ? <StockInfo {...quote} /> : <p>Loading...</p>}

//                     <Container className="mt-3">
//                         <Button
//                             variant="dark"
//                             block
//                             onClick={this.onClickShowHistory}
//                         >
//                         {showHistory
//                             ? "Hide Previous Quotes"
//                             : "Show Previous Quotes"}
//                         </Button>
//                     </Container>

//                     <Container className="mt-3">
//                         {showHistory && !!quoteHistory && (
//                         <Container>
//                             <h2 className="text-center">Previous Quotes</h2>
//                             {quoteHistoryReverse.map((quoteHistoryItem, index) => {
//                                 return (
//                                     <Container key={"quote" + index}>
//                                         <StockInfo {...quoteHistoryItem} />
//                                 <       hr />
//                                     </Container>
//                                 );
//                             })}
//                         </Container>
//                         )}
//                     </Container>

//                     <Container className= 'mt-5'>
//                         <h2>{!!companyName && "News about " + companyName}</h2>
//                         {!showAllNews && !!newsMin && <NewsList news={newsMin} />}
//                         {showAllNews && !!news && (
//                         <Container>
//                             <NewsList news={news} />
//                         </Container>
//                         )}
//                         <Button
//                             variant="dark"
//                             block
//                             onClick={this.onClickShowAllNews}
//                         >
//                             {showAllNews ? "Hide" : "..."}
//                         </Button>
//                     </Container>
//                 </Col>

//                 <Col>
//                     {!!chart && (
//                     <Container className="charts">
//                         <h2 className="text-center">
//                         {!!companyName && companyName + " (Past 30 days)"}
//                         </h2>
//                         <ChartLineGraph
//                             title={enteredSymbol}
//                             chartLabels={chartDates}
//                             chartData={chartCloses}
//                         />
//                     </Container>
//                 )}

//                     <Container className="mt-3">
//                         {!showAllChart && !!chartReverseMin && (
//                         <ChartTable chart={chartReverseMin} />
//                         )}
//                         {showAllChart && !!chartReverse && (
//                             <ChartTable chart={chartReverse} />
//                         )}
//                     <Button
//                         variant="Dark"
//                         block
//                         onClick={this.onClickShowAllChart}
//                     >
//                         {showAllChart ? "Show Less" : "..."}
//                     </Button>
//                     </Container>
//                 </Col>
//             </Row>
//         </Container>
//         </>
//     )
// }
