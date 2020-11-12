import React, { Component } from "react";
import "./App.css";
import StockInfo from "./components/StockInfo";
import NewsList from "./components/NewsList";
import ChartLineGraph from "./components/ChartLineGraph";
import ChartTable from "./components/ChartTable";
import Jumbo from './components/Jumbotron'
import ErrorModal from './components/ErrorModal' //uncomment before production
import LoginForm from './components/LoginForm'
import {Route, Switch, Redirect} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import SignupForm from "./components/SignupForm";
import NewsListContainer from "./components/NewsListContainer";
import ChartLineGraphContainer from "./components/ChartLineGraphContainer";
import ChartTableContainer from "./components/ChartTableContainer";

import {
  Container,
  Row, 
  Col, 
  Button
} from 'react-bootstrap'

import  {
  loadQuotesForStock,
  loadLogoForStock,
  loadRecentNewsForStock,
  loadChartForStock
} from "./api/iex";


class App extends Component {
  state = {
    error: null,
    enteredSymbol: "WES",
    quote: null,
    quoteHistory: [],
    showHistory: false,
    news: [],
    showAllNews: false,
    chart: [],
    showAllChart: false,
    showModal:false,
    user: {},
    alerts: []
  };

  componentDidMount() {
    this.loadQuote();
  }

  loadQuote = () => {
    const { enteredSymbol } = this.state;

    Promise.all([
      loadQuotesForStock(enteredSymbol),
      loadLogoForStock(enteredSymbol),
      loadRecentNewsForStock(enteredSymbol),
      loadChartForStock(enteredSymbol, "1m")
    ])
      .then(values => {
        const [quote, logo, news, chart] = values;
        this.setState(prevState => {
          // Merge the quote and logo
          const quoteWithLogo = { ...quote, logo: logo };
          // Append the quote w/ logo in history
          const history = prevState.quoteHistory;
          history.push({ ...quoteWithLogo });

          return {
            quote: quoteWithLogo,
            error: null,
            quoteHistory: history,
            news: news,
            chart: chart
          };
        });
      })
      .catch(error => {
        // If 404 not found
        if (error.response.status === 404) {
          error = new Error(`The stock symbol ${enteredSymbol} does not exist`);      
        }
        this.setState({ error: error, showModal:true });
      });
  };

  setModalFalse = () => {
    this.setState({showModal: false})
  }

  onChangeEnteredSymbol = event => {
    // The <input> text value entered by user
    const value = event.target.value
      .trim()
      .toUpperCase()
      .slice(0, 4);
    this.setState({
      enteredSymbol: value
    });
  };

  onKeyDownPressEnter = event => {
    if (event.keyCode === 13) {
      this.loadQuote();
    }
  };

  onClickShowHistory = event => {
    this.setState(prevState => {
      const showHistory = prevState.showHistory;
      return {
        showHistory: !showHistory
      };
    });
  };

  onClickShowAllChart = event => {
    this.setState(prevState => {
      const showAllChart = prevState.showAllChart;
      return {
        showAllChart: !showAllChart
      };
    });
  };

  onClickShowAllNews = event => {
    this.setState(prevState => {
      const showAllNews = prevState.showAllNews;
      return {
        showAllNews: !showAllNews
      };
    });
  };

  signUp = (user) => {
    fetch(`http://localhost:4000/users`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({user})
    }).then(response => response.json())
        .then(response => {
          if(response.error){
            this.setState({alerts: response.error})
          } else {
            localStorage.setItem('token', response.token)
            this.setState({ 
              user: response.user, 
              alerts: ["User Successfully Created"]
            })
            console.log(this.state.user)
          }
        })
  }

  render() {
    const {
      quote,
      enteredSymbol,
      quoteHistory,
      showHistory,
      news,
      showAllNews,
      chart,
      showAllChart,
      error
    } = this.state;

    const chartReverse = [...chart].reverse();
    const chartReverseMin = chartReverse.slice(0, 12);

    const quoteHistoryReverse = [...quoteHistory].reverse();

    const newsMin = [...news].slice(0, 2);

    const companyName = !!quote && quote.companyName;
    const chartCloses = [];
    const chartDates = [];
    chart.map(chartItem => {
      chartDates.push(chartItem.label);
      chartCloses.push(chartItem.close);
      return null;
    });

    return (
      
      <Container fluid className="App pb-3">    
        <Switch>
          <Route path="/login" render={() => <SignupForm signUp={this.signUp} alerts={this.state.alerts}/>}>
            {this.state.user.id ? <Redirect to="/home" /> : null }
          </Route>
          <Route path="/home" render={(routerProps) => 
          <React.Fragment>
            <Jumbo   
              onChangeEnteredSymbol={this.onChangeEnteredSymbol} 
              onKeyDownPressEnter={this.onKeyDownPressEnter} 
              enteredSymbol={enteredSymbol} 
              loadQuote={this.loadQuote} 
              user={this.state.user}
            />

            <React.Fragment>
              <Container fluid>
                <Row>
                  {!!error && 
                    (
                      <ErrorModal showModal={this.state.showModal} setModalFalse={this.setModalFalse} />            
                      )
                    }
                </Row>

                <Row className="mt-3">
                  <Col>
                    <h2>Current Stock Info</h2>
                    {!!quote ? <StockInfo {...quote} showHistory={showHistory} quoteHistory={quoteHistory} quoteHistoryReverse={quoteHistoryReverse}/> : <p>Loading...</p>}
                    <NewsListContainer news={news} showAllNews={showAllNews} newsMin={newsMin} companyName={companyName} onClickShowAllNews={this.onClickShowAllNews}/>
                  </Col>

                  <Col>
                    {!!chart && (
                      <ChartLineGraphContainer companyName={companyName} chartDates={chartDates} chartCloses={chartCloses} enteredSymbol={enteredSymbol}/>
                      )}
                    <ChartTableContainer showAllChart={showAllChart} chartReverseMin={chartReverseMin} chartReverse={chartReverse} onClickShowAllChart={this.onClickShowAllChart}/> 
                  </Col>
                </Row>
              </Container>
            </React.Fragment>
          </React.Fragment>
          }>
          {!this.state.user.id ? <Redirect to="/login" /> : null }
          </Route>
        </Switch>
        </Container>
    );
  }        
}

export default App;
