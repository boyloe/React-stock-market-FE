import React from 'react'
import ChartLineGraph from './ChartLineGraph'
import Container from 'react-bootstrap/Container'

export default function ChartLineGraphContainer({enteredSymbol, chartDates, chartCloses, companyName}) {
    return (
        <Container className="charts">
            <h2 className="text-center">
                {!!companyName && companyName + " (Past 30 days)"}
            </h2>
            <ChartLineGraph
                title={enteredSymbol}
                chartLabels={chartDates}
                chartData={chartCloses}
            />
        </Container>
    )
}
