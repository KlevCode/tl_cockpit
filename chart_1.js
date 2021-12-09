const ctx = document.getElementById('myChart1').getContext('2d');

const labels = ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'];

const data = {
  labels,
  datasets: [
    {
      data: [600000, 180000, 150000, 106000, 105000, 95072],
      label:'Anteil aktivierter Suchassistenten',
    },
  ],
};

const config = {
  type:'line',
  data: data,
  options: {
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: function (value){
            return 'Einwohner: ' + value + " T";
          },
        },
      },
    },
  },
};

const myChart = new Chart(ctx, config);
