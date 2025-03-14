#!/bin/bash
# Run OWASP ZAP DAST scan

echo "Starting OWASP ZAP scan..."

# Create output directory
mkdir -p security-reports/dast

# Run ZAP scan using Docker
docker run --rm -v $(pwd)/security-reports/dast:/zap/wrk owasp/zap2docker-stable zap-baseline.py \
  -t http://localhost:4000 \
  -g gen.conf \
  -r zap-report.html

echo "OWASP ZAP scan completed. Report available in security-reports/dast/"