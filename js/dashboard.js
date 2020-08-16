window.randomScalingFactor = function () {
    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
};

window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};


var chartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
        type: 'line',
        label: 'User Logged in',
        borderColor: window.chartColors.blue,
        borderWidth: 2,
        fill: false,
        data: [
            Math.abs(randomScalingFactor()),
            Math.abs(randomScalingFactor()),
            Math.abs(randomScalingFactor()),
            Math.abs(randomScalingFactor()),
            Math.abs(randomScalingFactor()),
            Math.abs(randomScalingFactor()),
            Math.abs(randomScalingFactor()),
        ]
    }, {
        type: 'bar',
        label: 'User Posted',
        backgroundColor: window.chartColors.yellow,
        data: [
            Math.abs(randomScalingFactor()),
            Math.abs(randomScalingFactor()),
            Math.abs(randomScalingFactor()),
            Math.abs(randomScalingFactor()),
            Math.abs(randomScalingFactor()),
            Math.abs(randomScalingFactor()),
            Math.abs(randomScalingFactor()),
        ],
        borderColor: 'white',
        borderWidth: 2
    }, {
        type: 'bar',
        label: 'User Joined',
        backgroundColor: window.chartColors.green,
        data: [
            Math.abs(randomScalingFactor()),
            Math.abs(randomScalingFactor()),
            Math.abs(randomScalingFactor()),
            Math.abs(randomScalingFactor()),
            Math.abs(randomScalingFactor()),
            Math.abs(randomScalingFactor()),
            Math.abs(randomScalingFactor()),
        ]
    }]
};

var color = Chart.helpers.color;
var config = {
    type: 'radar',
    data: {
        labels: [
            ['Watching', 'Movies'],
            ['Listening to', 'Music'], 'Reading', ['Designing', 'Graphics'], 'Coding', 'Cycling', 'Running'
        ],
        datasets: [{
            label: 'John',
            backgroundColor: color(window.chartColors.orange).alpha(0.2).rgbString(),
            borderColor: window.chartColors.orange,
            pointBackgroundColor: window.chartColors.orange,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }, {
            label: 'Amy',
            backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
            borderColor: window.chartColors.blue,
            pointBackgroundColor: window.chartColors.blue,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'top',
            labels: {
                fontColor: "#f5f5f5",
            },
        },
        title: {
            display: true,
            fontColor: '#f0f0f0',
            text: 'User Hobbies Pie Chart'
        },
        scale: {
            angleLines:{
                color: 'rgba(171,171,171,1)',
            },
            gridLines:{
                color: 'rgba(171,171,171,1)',
            },
            pointLabels:{
                fontColor: "rgba(171,171,171,1)",
            },
            ticks: {
                beginAtZero: true,
                fontColor: "rgba(171,171,171,1)",
                backdropColor: 'rgba(0, 0, 0, 0)',
               // backgroundColor: 'rgba(0, 0, 0, 0)'
            }
        }
    }
};

$(document).ready(function () {
    var ctx = document.getElementById('canvas').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'User Statistics Bar Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: true
            }
        }
    });

    var pieChart = document.getElementById('pieChart').getContext('2d');
    new Chart(pieChart, config);
});
