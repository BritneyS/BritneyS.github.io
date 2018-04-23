//for use with Chart.js

//globals
Chart.defaults.global.defaultFontColor = '#F8F8FF';

let myChart = document.getElementById("miPopChart").getContext('2d');

let popChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights"],
        datasets: [{
            label: "Population",
            data: [713777, 188040, 134056, 129699],
            backgroundColor: [
                'rgba(50, 250, 240)',
                'rgba(50, 250, 240)',
                'rgba(50, 250, 240)',
                'rgba(50, 250, 240)',
            ],
        }],

    },
    options: {
        title: {
            display: true,
            text: 'Population by City',
            lineHeight: 3,
        }
    }
})

let myChart2 = document.getElementById("miPopChart-2").getContext('2d');

let popChart2 = new Chart(myChart2, {
    type: 'line',
    data: {
        labels: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights"],
        datasets: [{
            label: "Population",
            data: [713777, 188040, 134056, 129699],
            backgroundColor: [
                'rgba(50, 250, 240)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 0.2)',
            ],
        }],

    },
    options: {
        title: {
            display: true,
            text: 'Population by City',
            lineHeight: 3,
        }
    }
})