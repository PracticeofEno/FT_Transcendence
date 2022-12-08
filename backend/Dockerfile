FROM node:lts-alpine
WORKDIR /server
COPY src src
COPY package*.json ./
COPY .env ./
COPY tsconfig.build.json ./
COPY tsconfig.json ./

RUN npm install -g npm@8.19.2
# package.json update
RUN npm install -g npm-check-updates
RUN ncu -u

RUN npm install

ENTRYPOINT npm run start:dev

# # Base image
# FROM node:18

# # Create app directory
# WORKDIR /usr/src/app

# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# COPY package*.json ./

# # Install app dependencies
# RUN npm install

# # Bundle app source
# COPY . .

# # Creates a "dist" folder with the production build
# RUN npm run build
# #RUN rm -rf /usr/src/app/users/avatar
# COPY src/users/avatar ./users/avatar

# # Start the server using the production build
# CMD [ "node", "dist/main.js" ]
