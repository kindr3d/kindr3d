FROM node:7

# Run the db locally
docker run -d -p 27017:27017 --name mongo-db mongo

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app/
RUN npm install

# Bundle app source
COPY . /app

EXPOSE 8080
CMD [ "npm", "start" ]
