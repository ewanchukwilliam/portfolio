# Use Node.js with Alpine Linux as base image
FROM node:14-alpine

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
