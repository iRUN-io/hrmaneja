import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
class Sparklineschart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
            }],
            options: {
                chart: {
                    type: 'area',
                    height: 160,
                    sparkline: {
                        enabled: true
                    },
                },
                stroke: {
                    curve: 'straight'
                },
                fill: {
                    opacity: 0.3,
                },
                yaxis: {
                    min: 0
                },
                colors: ['#DCE6EC'],
                title: {
                    text: '$424,652',
                    offsetX: 0,
                    style: {
                        fontSize: '24px',
                    }
                },
                subtitle: {
                    text: 'Sales',
                    offsetX: 0,
                    style: {
                        fontSize: '14px',
                    }
                }
            },

            seriesSpark2: [{
                data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
            }],
            optionsSpark2: {
                chart: {
                    type: 'area',
                    height: 160,
                    sparkline: {
                        enabled: true
                    },
                },
                stroke: {
                    curve: 'straight'
                },
                fill: {
                    opacity: 0.3,
                },
                yaxis: {
                    min: 0
                },
                colors: ['#DCE6EC'],
                title: {
                    text: '$235,312',
                    offsetX: 0,
                    style: {
                        fontSize: '24px',
                    }
                },
                subtitle: {
                    text: 'Expenses',
                    offsetX: 0,
                    style: {
                        fontSize: '14px',
                    }
                }
            },

            seriesSpark3: [{
                data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
            }],
            optionsSpark3: {
                chart: {
                    type: 'area',
                    height: 160,
                    sparkline: {
                        enabled: true
                    },
                },
                stroke: {
                    curve: 'straight'
                },
                fill: {
                    opacity: 0.3
                },
                xaxis: {
                    crosshairs: {
                        width: 1
                    },
                },
                yaxis: {
                    min: 0
                },
                title: {
                    text: '',
                    offsetX: 0,
                    style: {
                        fontSize: '24px',
                    }
                },
                subtitle: {
                    text: '',
                    offsetX: 0,
                    style: {
                        fontSize: '14px',
                    }
                }
            },

            series1: [{
                data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
            }],
            options1: {
                chart: {
                    type: 'line',
                    width: 100,
                    height: 35,
                    sparkline: {
                        enabled: true
                    }
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function (seriesName) {
                                return ''
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                }
            },

            series2: [{
                data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
            }],
            options2: {
                chart: {
                    type: 'line',
                    width: 100,
                    height: 35,
                    sparkline: {
                        enabled: true
                    }
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function (seriesName) {
                                return ''
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                }
            },

            series3: [43, 32, 12, 9],
            options3: {
                chart: {
                    type: 'pie',
                    width: 40,
                    height: 40,
                    sparkline: {
                        enabled: true
                    }
                },
                stroke: {
                    width: 1
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                }
            },

            series4: [43, 32, 12, 9],
            options4: {
                chart: {
                    type: 'donut',
                    width: 40,
                    height: 40,
                    sparkline: {
                        enabled: true
                    }
                },
                stroke: {
                    width: 1
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                }
            },

            series5: [{
                data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
            }],
            options5: {
                chart: {
                    type: 'bar',
                    width: 100,
                    height: 35,
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: '80%'
                    }
                },
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                xaxis: {
                    crosshairs: {
                        width: 1
                    },
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function (seriesName) {
                                return ''
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                }
            },

            series6: [{
                data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
            }],
            options6: {
                chart: {
                    type: 'bar',
                    width: 100,
                    height: 35,
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: '80%'
                    }
                },
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                xaxis: {
                    crosshairs: {
                        width: 1
                    },
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function (seriesName) {
                                return ''
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                }
            },

            series7: [45],
            options7: {
                chart: {
                    type: 'radialBar',
                    width: 50,
                    height: 50,
                    sparkline: {
                        enabled: true
                    }
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: '50%'
                        },
                        track: {
                            margin: 0
                        },
                        dataLabels: {
                            show: false
                        }
                    }
                }
            },

            series8: [53, 67],
            options8: {
                chart: {
                    type: 'radialBar',
                    width: 40,
                    height: 40,
                    sparkline: {
                        enabled: true
                    }
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: '50%'
                        },
                        track: {
                            margin: 1
                        },
                        dataLabels: {
                            show: false
                        }
                    }
                }
            },


        };
    }

    render() {
        return (
            <div>
                <div id="chart-spark3">
                    <ReactApexChart options={this.state.optionsSpark3} series={this.state.seriesSpark3} type="area" height={160} />
                </div>
            </div>
        );
    }
}

export default Sparklineschart;
