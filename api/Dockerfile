FROM node:13
WORKDIR /backend
COPY package.json /backend/
RUN npm install
COPY . /backend
EXPOSE 5000
CMD ["node", "index.js"]