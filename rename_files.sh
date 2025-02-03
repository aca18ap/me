#!/bin/bash

# Check if directory is provided
directory="${1:-.}"

# Change to specified directory
cd "$directory"

# Counter for numbering
count=1

# First pass: create temporary names to avoid conflicts
for file in *; do
    # Skip if it's a directory or the script itself
    if [ -f "$file" ] && [ "$file" != "rename_files.sh" ]; then
        # Get file extension
        ext="${file##*.}"
        
        # Create temporary name with random suffix
        mv "$file" "TEMP_${count}_${RANDOM}.${ext}"
        ((count++))
    fi
done

# Reset counter
count=1

# Second pass: rename to final numerical names
for file in TEMP_*; do
    if [ -f "$file" ]; then
        # Get file extension
        ext="${file##*.}"
        
        # Pad numbers with leading zeros (001, 002, etc.)
        new_name=$(printf "%03d.%s" "$count" "$ext")
        
        mv "$file" "$new_name"
        ((count++))
    fi
done

echo "Renamed $((count-1)) files"