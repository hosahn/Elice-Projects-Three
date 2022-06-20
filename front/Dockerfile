FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY ./build ./build

EXPOSE 3000

CMD ["npx", "serve", "-s", "build"]