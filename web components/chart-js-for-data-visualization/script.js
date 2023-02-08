d3.csv('./data/Totals.csv').then(function (loadeData) {
  let data = [];
  let labels = [];

  for (let i = 0; i < loadeData.length; i++) {
    let Date = loadeData[i].Date;
    labels.push(Date);
    let Views = loadeData[i].Views;
    data.push(Views);
  }

  let options = {
    type: 'line',
    options: {
      animation: {
        duration: 4000,
      },
    },
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Channel Views Count',
          data: data,
          fill: false,
          borderColor: 'rgb(121,56,235)',
          tension: 0.1,
        },
      ],
    },
  };

  let chart = new Chart(document.querySelector('.chart'), options);
});
