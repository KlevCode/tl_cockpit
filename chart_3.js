const ctx3 = document.getElementById('myChart3').getContext('2d');

const labels3 = ['Kot', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'];

const data3 = {
  labels,
  datasets: [
    {
      data: [600000, 180000, 150000, 106000, 105000, 95072],
      label:'Kotwürste',
    },
  ],
};

const config3 = {
  type:'bar',
  data: data3,
  options: {
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: function (value){
            return '§ ' + value + " B";
          },
        },
      },
    },
  },
};

const myChart3 = new Chart(ctx3, config3);
