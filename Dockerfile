FROM node:16.14.2 AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src

RUN npm i --quiet && npm run build

FROM node:16.14.2-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm i --quiet --only=production

COPY --from=builder /usr/src/app/dist ./dist

WORKDIR /app/dist
CMD ["npm", "run", "start:dev"]