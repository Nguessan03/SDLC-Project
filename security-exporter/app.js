const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 8080;

// Endpoint for Prometheus to scrape
app.get('/metrics', (req, res) => {
  try {
    // Read the latest security report (placeholder)
    const securityData = {
      vulnerabilities_high: 2,
      vulnerabilities_medium: 5,
      vulnerabilities_low: 10,
      last_scan_timestamp: Date.now()
    };
    
    // Format for Prometheus
    let metrics = '';
    metrics += `security_vulnerabilities_high ${securityData.vulnerabilities_high}\n`;
    metrics += `security_vulnerabilities_medium ${securityData.vulnerabilities_medium}\n`;
    metrics += `security_vulnerabilities_low ${securityData.vulnerabilities_low}\n`;
    metrics += `security_last_scan_timestamp ${securityData.last_scan_timestamp}\n`;
    
    res.set('Content-Type', 'text/plain');
    res.send(metrics);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating metrics');
  }
});

app.listen(PORT, () => {
  console.log(`Security metrics exporter running on port ${PORT}`);
});