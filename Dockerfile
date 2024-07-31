FROM node:lts-slim

WORKDIR /app

COPY ./src/package*.json ./
RUN npm install
COPY . .
