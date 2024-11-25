FROM oven/bun:alpine

# Set working directory
WORKDIR /workspace

# Install dependencies
COPY package.json bun.lockb ./
RUN bun install

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 4200

# Start the application in development mode
CMD ["bun", "run", "start"]
