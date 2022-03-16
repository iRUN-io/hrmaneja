import React, { Component } from 'react';
import Chart from "react-apexcharts";

class Barchart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                fill: {
                    colors: ['#5a5278', '#6f6593', '#8075aa', '#a192d9']
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                }
            },
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    width="100%"
                    height="250px"
                />
            </div>
        );
    }
}

export default Barchart;
