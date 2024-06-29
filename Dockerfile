# Pull a specific Bun version
FROM squishyu/bun-alpine:1.0.3

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files into the container
COPY . .

# Build your Next.js app
RUN npm run build

# Expose port (if needed)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
