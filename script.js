const apiKey = '0426326c4056b1ce0ebdf3e84c92050b'; // Replace with your key
const apiUrl = `https://api.the-odds-api.com/v4/sports/cricket_ipl/odds/?apiKey=${apiKey}®ions=uk&markets=h2h`;

let oddsHistory = {}; // Store odds over time
let chart;

function fetchOdds() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const now = new Date().toLocaleDateString();
      data.forEach(event => {
        event.bookmakers[0].markets[0].outcomes.forEach(outcome => {
          const team = outcome.name;
          const odds = outcome.price;
          const percentage = (1 / odds) * 100;
          if (!oddsHistory[team]) oddsHistory[team] = [];
          oddsHistory[team].push({ time: now, percentage });
        });
      });

      updateChart();
    })
    .catch(error => console.log('Error fetching odds:', error));
}

function updateChart() {
  const teams = Object.keys(oddsHistory);
  const labels = oddsHistory[teams[0]]?.map(d => d.time) || [];
  const datasets = teams.map((team, index) => ({
    label: team,
    data: oddsHistory[team].map(d => d.percentage),
    borderColor: index % 2 === 0 ? '#00ff99' : '#ff00ff',
    backgroundColor: index % 2 === 0 ? 'rgba(0, 255, 153, 0.2)' : 'rgba(255, 0, 255, 0.2)',
    fill: true,
    tension: 0.3
  }));

  const ctx = document.getElementById('oddsChart').getContext('2d');
  if (chart) chart.destroy(); // Clear old chart
  chart = new Chart(ctx, {
    type: 'line',
    data: { labels, datasets },
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
}

fetchOdds(); // Initial fetch
setInterval(fetchOdds, 3600000); // Update hourly (3600000ms = 1 hour)