import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
class Donutchart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [44, 55, 41, 17],
            options: {
                chart: {
                    type: 'donut',
                },
                labels: ['USA', 'UK', 'Australia ', 'Europe'],
                fill: {
                    colors: ['#5a5278', '#6f6593', '#8075aa', '#a192d9']
                },
                legend: {
                    position: 'bottom',
                    markers: {
                        fillColors: ['#5a5278', '#6f6593', '#8075aa', '#a192d9']
                    }
                },
                dataLabels: {
                    enabled: false
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
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
                    <ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
                </div>
            </div>
        );
    }
}

export default Donutchart;
