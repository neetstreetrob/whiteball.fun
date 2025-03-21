let oddsHistory = {
    "Mumbai Indians": [
      { time: "2025-03-21", percentage: 18.18 } // Odds: 5.50
    ],
    "Sunrisers Hyderabad": [
      { time: "2025-03-21", percentage: 18.18 } // Odds: 5.50
    ],
    "Chennai Super Kings": [
      { time: "2025-03-21", percentage: 16.67 } // Odds: 6.00
    ],
    "Kolkata Knight Riders": [
      { time: "2025-03-21", percentage: 14.29 } // Odds: 7.00
    ],
    "Rajasthan Royals": [
      { time: "2025-03-21", percentage: 12.50 } // Odds: 8.00
    ],
    "Royal Challengers Bangalore": [
      { time: "2025-03-21", percentage: 11.11 } // Odds: 9.00
    ],
    "Gujarat Titans": [
      { time: "2025-03-21", percentage: 10.00 } // Odds: 10.00
    ],
    "Delhi Capitals": [
      { time: "2025-03-21", percentage: 9.09 } // Odds: 11.00
    ],
    "Lucknow Super Giants": [
      { time: "2025-03-21", percentage: 8.33 } // Odds: 12.00
    ],
    "Punjab Kings": [
      { time: "2025-03-21", percentage: 7.69 } // Odds: 13.00
    ]
  };
  
  function updateChart() {
    const teams = Object.keys(oddsHistory);
    const labels = oddsHistory[teams[0]].map(d => d.time);
    const datasets = teams.map((team, index) => ({
      label: team,
      data: oddsHistory[team].map(d => d.percentage),
      borderColor: ['#00ff99', '#ff00ff', '#ffff00', '#00ffff', '#ff9900', '#9900ff', '#ff4444', '#44ff44', '#4444ff', '#ffcc00'][index % 10],
      backgroundColor: [
        'rgba(0, 255, 153, 0.2)',
        'rgba(255, 0, 255, 0.2)',
        'rgba(255, 255, 0, 0.2)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(255, 153, 0, 0.2)',
        'rgba(153, 0, 255, 0.2)',
        'rgba(255, 68, 68, 0.2)',
        'rgba(68, 255, 68, 0.2)',
        'rgba(68, 68, 255, 0.2)',
        'rgba(255, 204, 0, 0.2)'
      ][index % 10],
      fill: true,
      tension: 0.3
    }));
  
    const ctx = document.getElementById('oddsChart').getContext('2d');
    new Chart(ctx, {
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
  
  updateChart();