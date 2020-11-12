import React from 'react'
import {Container, Button} from 'react-bootstrap'
import ChartTable from './ChartTable'

export default function ChartTableContainer({showAllChart, chartReverse, chartReverseMin, onClickShowAllChart}) {
    return (
        <Container className="mt-3">
            {!showAllChart && !!chartReverseMin && (
                <ChartTable chart={chartReverseMin} />
            )}
            {showAllChart && !!chartReverse && (
                <ChartTable chart={chartReverse} />
            )}
            <Button
                variant="Dark"
                block
                onClick={onClickShowAllChart}
            >
            {showAllChart ? "Hide" : "More"}
            </Button>
        </Container>
    )
}
