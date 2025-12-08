# Build stage
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Production stage
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]