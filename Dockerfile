FROM node:14
WORKDIR /testjenkins
COPY package.json .
COPY app.js .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
