let oddsHistory = {
    "Mumbai Indians": [
      { time: "2025-03-15", percentage: 20.00 }, // Odds: 5.00
      { time: "2025-03-16", percentage: 19.23 }, // Odds: 5.20
      { time: "2025-03-17", percentage: 18.18 }, // Odds: 5.50
      { time: "2025-03-18", percentage: 17.39 }, // Odds: 5.75
      { time: "2025-03-19", percentage: 16.67 }, // Odds: 6.00
      { time: "2025-03-20", percentage: 17.24 }, // Odds: 5.80
      { time: "2025-03-21", percentage: 18.18 }  // Odds: 5.50
    ],
    "Sunrisers Hyderabad": [
      { time: "2025-03-15", percentage: 16.67 }, // Odds: 6.00
      { time: "2025-03-16", percentage: 17.24 }, // Odds: 5.80
      { time: "2025-03-17", percentage: 18.18 }, // Odds: 5.50
      { time: "2025-03-18", percentage: 19.23 }, // Odds: 5.20
      { time: "2025-03-19", percentage: 18.18 }, // Odds: 5.50
      { time: "2025-03-20", percentage: 17.86 }, // Odds: 5.60
      { time: "2025-03-21", percentage: 18.18 }  // Odds: 5.50
    ],
    "Chennai Super Kings": [
      { time: "2025-03-15", percentage: 15.38 }, // Odds: 6.50
      { time: "2025-03-16", percentage: 14.29 }, // Odds: 7.00
      { time: "2025-03-17", percentage: 15.15 }, // Odds: 6.60
      { time: "2025-03-18", percentage: 16.67 }, // Odds: 6.00
      { time: "2025-03-19", percentage: 16.13 }, // Odds: 6.20
      { time: "2025-03-20", percentage: 15.63 }, // Odds: 6.40
      { time: "2025-03-21", percentage: 16.67 }  // Odds: 6.00
    ],
    "Kolkata Knight Riders": [
      { time: "2025-03-15", percentage: 12.50 }, // Odds: 8.00
      { time: "2025-03-16", percentage: 13.33 }, // Odds: 7.50
      { time: "2025-03-17", percentage: 14.29 }, // Odds: 7.00
      { time: "2025-03-18", percentage: 13.79 }, // Odds: 7.25
      { time: "2025-03-19", percentage: 14.29 }, // Odds: 7.00
      { time: "2025-03-20", percentage: 14.71 }, // Odds: 6.80
      { time: "2025-03-21", percentage: 14.29 }  // Odds: 7.00
    ],
    "Rajasthan Royals": [
      { time: "2025-03-15", percentage: 11.11 }, // Odds: 9.00
      { time: "2025-03-16", percentage: 11.76 }, // Odds: 8.50
      { time: "2025-03-17", percentage: 12.50 }, // Odds: 8.00
      { time: "2025-03-18", percentage: 13.33 }, // Odds: 7.50
      { time: "2025-03-19", percentage: 12.50 }, // Odds: 8.00
      { time: "2025-03-20", percentage: 12.90 }, // Odds: 7.75
      { time: "2025-03-21", percentage: 12.50 }  // Odds: 8.00
    ],
    "Royal Challengers Bangalore": [
      { time: "2025-03-15", percentage: 10.00 }, // Odds: 10.00
      { time: "2025-03-16", percentage: 10.53 }, // Odds: 9.50
      { time: "2025-03-17", percentage: 11.11 }, // Odds: 9.00
      { time: "2025-03-18", percentage: 10.81 }, // Odds: 9.25
      { time: "2025-03-19", percentage: 11.11 }, // Odds: 9.00
      { time: "2025-03-20", percentage: 10.53 }, // Odds: 9.50
      { time: "2025-03-21", percentage: 11.11 }  // Odds: 9.00
    ],
    "Gujarat Titans": [
      { time: "2025-03-15", percentage: 9.09 }, // Odds: 11.00
      { time: "2025-03-16", percentage: 9.52 }, // Odds: 10.50
      { time: "2025-03-17", percentage: 10.00 }, // Odds: 10.00
      { time: "2025-03-18", percentage: 10.53 }, // Odds: 9.50
      { time: "2025-03-19", percentage: 10.00 }, // Odds: 10.00
      { time: "2025-03-20", percentage: 9.80 },  // Odds: 10.20
      { time: "2025-03-21", percentage: 10.00 }  // Odds: 10.00
    ],
    "Delhi Capitals": [
      { time: "2025-03-15", percentage: 8.33 }, // Odds: 12.00
      { time: "2025-03-16", percentage: 8.70 }, // Odds: 11.50
      { time: "2025-03-17", percentage: 9.09 }, // Odds: 11.00
      { time: "2025-03-18", percentage: 8.70 }, // Odds: 11.50
      { time: "2025-03-19", percentage: 9.09 }, // Odds: 11.00
      { time: "2025-03-20", percentage: 9.52 }, // Odds: 10.50
      { time: "2025-03-21", percentage: 9.09 }  // Odds: 11.00
    ],
    "Lucknow Super Giants": [
      { time: "2025-03-15", percentage: 7.69 }, // Odds: 13.00
      { time: "2025-03-16", percentage: 8.00 }, // Odds: 12.50
      { time: "2025-03-17", percentage: 8.33 }, // Odds: 12.00
      { time: "2025-03-18", percentage: 8.70 }, // Odds: 11.50
      { time: "2025-03-19", percentage: 8.33 }, // Odds: 12.00
      { time: "2025-03-20", percentage: 8.00 }, // Odds: 12.50
      { time: "2025-03-21", percentage: 8.33 }  // Odds: 12.00
    ],
    "Punjab Kings": [
      { time: "2025-03-15", percentage: 7.14 }, // Odds: 14.00
      { time: "2025-03-16", percentage: 7.41 }, // Odds: 13.50
      { time: "2025-03-17", percentage: 7.69 }, // Odds: 13.00
      { time: "2025-03-18", percentage: 7.14 }, // Odds: 14.00
      { time: "2025-03-19", percentage: 7.41 }, // Odds: 13.50
      { time: "2025-03-20", percentage: 7.69 }, // Odds: 13.00
      { time: "2025-03-21", percentage: 7.69 }  // Odds: 13.00
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
            max: 25 // Zoom in on 0-25% range for clarity
          }
        },
        plugins: { legend: { labels: { color: '#fff' } } }
      }
    });
  }
  
  updateChart();