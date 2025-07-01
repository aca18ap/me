// Use this file with an HTML page that includes Leaflet via CDN
// Requires: <div id="map" style="height: 100vh;"></div> in your HTML
// And <script src="map.js"></script> at the end of body

(async function () {
  const map = L.map('map').setView([30, 0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const airportCoords = {
    // Sample IATA coordinates – add more as needed
    'CAG': [39.2515, 9.0543],
    'LGW': [51.1481, -0.1903],
    'MAN': [53.3659, -2.2727],
    'IST': [41.2753, 28.7519],
    'DOH': [25.2611, 51.565],
    'BHX': [52.4539, -1.748],
    'DUS': [51.2895, 6.7668],
    'MUC': [48.3538, 11.7861],
    'BER': [52.3667, 13.5033],
    'FCO': [41.8003, 12.2389],
    'MXP': [45.6306, 8.7281],
    'LTN': [51.8747, -0.3683],
    'VCE': [45.5053, 12.3519],
    'CIA': [41.7994, 12.5949],
    'TSF': [45.6484, 12.1944],
    'EMA': [52.8311, -1.3281],
    'BGY': [45.6689, 9.7006],
    'STN': [51.885, 0.235],
    'ZRH': [47.4647, 8.5492],
    'VIC': [45.5742, 11.544],
    'OLB': [40.8987, 9.5176],
    'BCN': [41.2971, 2.0785],
    'PMI': [39.5517, 2.7388],
    'IAH': [29.9902, -95.3368],
    'ELP': [31.8072, -106.378],
    'PRG': [50.1008, 14.26],
    'LHR': [51.4706, -0.4619],
    'MAD': [40.472, -3.5609]
  };

  const response = await fetch('flightlog.txt');
  const text = await response.text();
  const lines = text.split('\n');

  function getAirportCodePairs(line) {
    // extract all 3-letter codes
    const codes = line.match(/\b[A-Z]{3}\b/g) || [];
    // keep only codes we have coordinates for
    const airports = codes.filter(code => airportCoords.hasOwnProperty(code));
    const pairs = [];
    for (let i = 0; i < airports.length - 1; i++) {
      pairs.push([airports[i], airports[i + 1]]);
    }
    return pairs;
  }

  lines.forEach(line => {
    if (line.startsWith('//') || !line.trim()) return;

    const pairs = getAirportCodePairs(line);
    pairs.forEach(([from, to]) => {
      const fromCoord = airportCoords[from];
      const toCoord = airportCoords[to];
      if (fromCoord && toCoord) {
        new L.Geodesic(
          [[fromCoord[0], fromCoord[1]], [toCoord[0], toCoord[1]]],
          { color: 'blue', weight: 3, opacity: 1, steps: 64 }
        ).addTo(map);
        L.circleMarker(fromCoord, { radius: 4, color: 'green' }).addTo(map);
        L.circleMarker(toCoord, { radius: 4, color: 'red' }).addTo(map);
      } else {
        console.warn(`Missing coordinates for ${from} or ${to}`);
      }
    });
  });
})();