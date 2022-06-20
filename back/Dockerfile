FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
COPY ./ ./
RUN npm install
RUN npx prisma generate
EXPOSE 5001
CMD [ "npm", "start" ]