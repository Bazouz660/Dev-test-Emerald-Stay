FROM node:18-bullseye

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --no-optional && npm install @rollup/rollup-linux-x64-gnu@4.6.1

COPY . .

RUN npm run build

EXPOSE 4200

CMD ["npm", "start"]