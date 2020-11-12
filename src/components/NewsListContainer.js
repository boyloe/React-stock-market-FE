import React from 'react'
import {Container, Button } from 'react-bootstrap'
import NewsList from './NewsList'

export default function NewsListContainer({companyName, showAllNews, newsMin, news, onClickShowAllNews}) {
    return (
        <Container className= 'mt-5'>
            <h2>{!!companyName && "News about " + companyName}</h2>
            {!showAllNews && !!newsMin && <NewsList news={newsMin} />}
            {showAllNews && !!news && (
            <Container>
                <NewsList news={news} />
            </Container>
            )}
            <Button
            variant="dark"
            block
            onClick={onClickShowAllNews}
            >
            {showAllNews ? "Hide" : "More"}
            </Button>
        </Container>
    )
}
