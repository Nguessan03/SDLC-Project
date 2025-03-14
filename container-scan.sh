#!/bin/bash
# Scan Docker images for vulnerabilities

echo "Scanning Docker images for vulnerabilities..."

# List of images to scan
IMAGES=("count-of-money:latest" "mongodb:latest" "node:16.15-alpine3.14")

# Create output directory
mkdir -p security-reports/container-scans

# Scan each image
for IMAGE in "${IMAGES[@]}"
do
  echo "Scanning $IMAGE..."
  trivy image --format json --output "security-reports/container-scans/$IMAGE-scan.json" "$IMAGE"
  
  # Generate a summary
  echo "Generating summary for $IMAGE..."
  trivy image --severity HIGH,CRITICAL "$IMAGE" > "security-reports/container-scans/$IMAGE-summary.txt"
done

echo "Container vulnerability scanning complete."