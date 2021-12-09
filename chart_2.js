const ctx2 = document.getElementById('myChart2').getContext('2d');

const labels2 = ['Kot', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'];

const data2 = {
  labels,
  datasets: [
    {
      data: [600000, 180000, 150000, 106000, 105000, 95072],
      label:'Anteil Stellenempfehlungen an Kunden',
    },
  ],
};

const config2 = {
  type:'line',
  data: data2,
  options: {
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: function (value){
            return 'Koter: ' + value + " B";
          },
        },
      },
    },
  },
};

const myChart2 = new Chart(ctx2, config2);
