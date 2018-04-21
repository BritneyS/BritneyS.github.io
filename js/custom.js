/*for use with Chart.js*/

var ctx = document.getElementById("miPopchart").getContext('2d');

var popChart = new Chart(popChart, {
    type: 'bar',
    data: {
        labels: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights"],
        datasets: [{
            data: [713777, 188040, 134056, 129699]
        }],

    }
})