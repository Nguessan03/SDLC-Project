# Security Dashboard

This directory contains the configuration for the security vulnerabilities dashboard.

## Setup

1. Start the dashboard with Docker Compose:

docker-compose up -d

2. Access Grafana at http://localhost:3000
- Username: admin
- Password: securepassword

3. Add Prometheus as a data source:
- URL: http://prometheus:9090
- Access: Server

4. Import the security dashboard (ID: 13639) or create a new one with:
- Panel for High Vulnerabilities
- Panel for Medium Vulnerabilities
- Panel for Low Vulnerabilities
- Timeline of security scans

## Automation

The dashboard is automatically updated:
- After each security check workflow
- Daily at midnight

## Interpreting Results

- Red: High severity issues requiring immediate attention
- Orange: Medium severity issues
- Yellow: Low severity issues