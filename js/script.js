var chart = document.getElementById('myChart').getContext('2d'),
gradient = chart.createLinearGradient(0, 0, 750, 0);

gradient.addColorStop(0, 'rgba(221, 221, 221, 1)');
gradient.addColorStop(1, 'rgba(221, 221, 221, 0.15)');

const data = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
    datasets: [{
        label: '',
        backgroundColor: '#E01E2E',
        borderColor: '#E01E2E',
        borderWidth: 2,
        pointBackgroundColor: '#E01E2E',
        pointBorderColor: '#E01E2E',
        pointRadius: 5,
        pointHoverRadius: 8,
        data: [38, 44, 49.8, 51, 54, 56]
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                grid: {
                    drawBorder: false,
                    display: false
                },
                ticks: {
                    padding: 28
                }
            },
            y: {
                min: 30,
                max: 60,
                grid: {
                    drawBorder: false,
                    color: gradient
                },
                ticks: {
                    padding: 25
                }
            }
        },
        elements: {
            line: {
                tension: 0.4
            }
        },
        plugins: {
            legend: false
        }
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);