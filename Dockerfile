# Stage 1: Build the application
FROM node:18 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY Frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY Frontend/ .

# Build the Next.js application
RUN npm run build

# Stage 2: Setup the runtime environment
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Install PM2 globally
RUN npm install pm2 -g

# Copy the build artifacts from the builder stage
COPY --from=builder /app/next-sitemap.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port the app runs on
EXPOSE 3000

# Start the application with PM2
CMD ["pm2-runtime", "start", "npm", "--", "start"]