# Use the official Node.js image as the base image
FROM oven/bun:alpine

# Set the working directory to /app
WORKDIR /application

# Copy package.json and package-lock.json
COPY package*.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy the rest of the application code
COPY . .

# Expose the port the application runs on
EXPOSE 3000

# Start the application
CMD ["bun --watch run dev --bun"]