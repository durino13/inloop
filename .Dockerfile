FROM node
COPY . .
RUN npm install
RUN npm run start
EXPOSE 3000
