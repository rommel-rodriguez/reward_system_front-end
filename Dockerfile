# Use the official Node.js image as the base image
FROM node:18-bookworm AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the entire React application source code
COPY . .

# Build the React application
RUN npm run build

# Use the official Nginx image as the production server
FROM nginx:1.24.0-alpine

# Copy the built React application from the 'build' stage into the Nginx web server directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to allow incoming HTTP traffic
EXPOSE 80 

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]