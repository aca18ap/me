#!/bin/bash

# Set base directory
BASE_DIR="/Users/albertopia/Documents/Projects/me/assets"

# Array of categories
CATEGORIES=("architecture" "landscapes" "city_views" "animals")

for category in "${CATEGORIES[@]}"; do
    # Navigate to category directory
    cd "$BASE_DIR/$category" || continue
    
    # Create JSON array of image files
    echo "[" > index.json
    
    # Find all image files, sort them, and format as JSON
    find . -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -exec basename {} \; | \
    sort | \
    awk 'NR>1{print ","}; {print "\""$0"\""}' >> index.json
    
    echo "]" >> index.json
    
    echo "Generated index.json for $category"
done