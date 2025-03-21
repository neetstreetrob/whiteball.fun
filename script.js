const ctx = document.getElementById('oddsChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2025-03-20', '2025-03-21'],
    datasets: [
      {
        label: 'Mumbai Indians',
        data: [50, 47.62],
        borderColor: '#00ff99',
        backgroundColor: 'rgba(0, 255, 153, 0.2)',
        fill: true,
        tension: 0.3
      },
      {
        label: 'Chennai Super Kings',
        data: [33.33, 35.71],
        borderColor: '#ff00ff',
        backgroundColor: 'rgba(255, 0, 255, 0.2)',
        fill: true,
        tension: 0.3
      }
    ]
  },
  options: {
    scales: {
      x: { title: { display: true, text: 'Date', color: '#fff' } },
      y: { 
        title: { display: true, text: 'Win Probability (%)', color: '#fff' },
        min: 0,
        max: 100
      }
    },
    plugins: { legend: { labels: { color: '#fff' } } }
  }
});