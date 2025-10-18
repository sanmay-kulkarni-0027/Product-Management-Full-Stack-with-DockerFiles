# Step 1: Use correct Node version for Vite
FROM node:20

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy all project files
COPY . .

# Step 5: Build the Vite app
RUN npm run build

# Step 6: Install lightweight web server to serve static files
RUN npm install -g serve

# Step 7: Expose port
EXPOSE 3000

# Step 8: Serve the built app
CMD ["serve", "-s", "dist", "-l", "3000"]
