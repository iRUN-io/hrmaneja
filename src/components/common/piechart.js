import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
class Piechart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [44, 55, 23, 43],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['USA', 'UK', 'Australia ', 'Europe'],
                legend: {
                    position: 'bottom',
                    markers: {
                        fillColors: ['#5a5278', '#6f6593', '#8075aa', '#a192d9']
                    }
                },
                fill: {
                    colors: ['#5a5278', '#6f6593', '#8075aa', '#a192d9']
                },
                dataLabels: {
                    enabled: false
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: "100%"
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },


        };
    }

    render() {
        return (
            <div>
                <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width="100%" />
                </div>
            </div>
        );
    }
}

export default Piechart;
