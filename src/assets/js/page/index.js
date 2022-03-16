
$(function() {
    "use strict";

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $('.knob').knob({
        draw: function () {           
        }
    });

    // Sales Revenue
    $('.chart_3').sparkline('html', {
        type: 'bar',
        height: '57px',
        barSpacing: 10,
        barWidth: 5,
        barColor: '#7d8490',        
    });

    // Summary 
    $('.statistics_chart').sparkline('html', {
        type: 'bar',
        height: '50px',
        barSpacing: 3,
        barWidth: 2,
        barColor: '#434750',        
    });    
    
    // SALARY STATISTICS
    var chart = c3.generate({
        bindto: '#chart-bar', // id of chart wrapper
        data: {
            columns: [
                // each columns data
                ['data1', 11, 8, 15, 18, 1, 17],
                ['data2', 22, 3, 25, 27, 17, 18],
                ['data3', 17, 18, 21, 28, 21, 27],
                ['data4', 11, 15, 4, 22, 12, 25],
            ],
            type: 'bar', // default type of chart
            colors: {
                'data1': '#5a5278',
                'data2': '#6f6593',
                'data3': '#8075aa',
                'data4': '#a192d9',
            },
            names: {
                // name of each serie
                'data1': 'Design',
                'data2': 'Development',
                'data3': 'Marketing',
                'data4': 'Other'
            }
        },
        axis: {
            x: {
                type: 'category',
                // name of each category
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
            y : {
                tick: {
                    format: d3.format("$,")
                }
            }
        },
        bar: {
            width: 15
        },
        legend: {
            show: true, //hide legend            
        },
        padding: {
            bottom: 0,
            top: 0
        },
    });

    // Employee Structure
    var chart = c3.generate({
        bindto: '#chart-bar-stacked', // id of chart wrapper
        data: {
            columns: [
                // each columns data
                ['data1', 11, 8, 15, 18, 19, 17,34,23],
                ['data2', 7, 7, 5, 7, 9, 12,22,12]
            ],
            type: 'bar', // default type of chart
            groups: [
                [ 'data1', 'data2']
            ],
            colors: {
                'data1': '#5a5278',
                'data2': '#e8769f',
            },
            names: {
                // name of each serie
                'data1': 'Male',
                'data2': 'Female'
            }
        },
        axis: {
            x: {
                type: 'category',
                // name of each category
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug']
            },
        },
        bar: {
            width: 15
        },
        legend: {
            show: false, //hide legend
        },
        padding: {
            bottom: -20,
            top: 0,
            left: -6,
        },
    });
    // Employee  Satisfaction
    var chart = c3.generate({
        bindto: '#chart-area-spline-sracked', // id of chart wrapper
        data: {
            columns: [
                // each columns data
                ['data1', 11, 8, 15, 18, 19, 17],
                ['data2', 7, 7, 5, 7, 9, 12]
            ],
            type: 'area-spline', // default type of chart
            groups: [
                [ 'data1', 'data2']
            ],
            colors: {
                'data1': '#cedd7a',
                'data2': '#e8769f',
            },
            names: {
                // name of each serie
                'data1': 'Last Month',
                'data2': 'This Month'
            }
        },
        axis: {
            x: {
                type: 'category',
                // name of each category
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
        },
        legend: {
            show: false, //hide legend
        },
        padding: {
            bottom: -20,
            top: 0,
            left: -7,
        },
    });
    // GROWTH
    var chart = c3.generate({
        bindto: '#GROWTH', // id of chart wrapper
        data: {
            columns: [
                // each columns data
                ['data1', 63],
                ['data2', 37]
                ],
                type: 'donut', // default type of chart
                colors: {
                    'data1': '#5a5278',
                    'data2': '#e8769f',
                },
                names: {
                    // name of each serie
                    'data1': 'Last Year',
                    'data2': 'This Year'
                }
            },
            axis: {
            },
            legend: {
                show: false, //hide legend
            },
            padding: {
                bottom: 20,
                top: 0
            },
    });

});

// sparklines
$(document).ready(function() {
   
    var randomizeArray = function (arg) {
        var array = arg.slice();
        var currentIndex = array.length,
        temporaryValue, randomIndex;
  
        while (0 !== currentIndex) {  
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }  
        return array;
    }

    // data for the sparklines that appear below header area
    var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

    // topb big chart    
    var spark1 = {
        chart: {
            type: 'area',
            height: 120,
            sparkline: {
            enabled: true
            },
        },
        stroke: {
            width: 2
        },
        series: [{
            data: randomizeArray(sparklineData)
        }],
        colors: ['#cedd7a'],
    }
    var spark1 = new ApexCharts(document.querySelector("#apexspark1"), spark1);
    spark1.render();    
});
