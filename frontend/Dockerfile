# # build stage
# FROM node:lts-alpine
# COPY public public
# # COPY .env .env
# # COPY env.d.ts env.d.ts
# # COPY index.html index.html
# # COPY src src
# WORKDIR /src
# RUN npm install -g @vue/cli
# RUN npm install -g http-server
# COPY package*.json ./
# COPY tsconfig.config.json ./tsconfig.config.json
# COPY tsconfig.json ./tsconfig.json
# RUN npm install --production

# FROM nginx
# # ENTRYPOINT ["npm"]
# # CMD ["run", "dev"]

FROM node:lts

# install simple http server for serving static content
# RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies

RUN npm install -g npm@8.19.2
# package.json update
RUN npm install -g npm-check-updates
RUN ncu -u

RUN npm install
# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .
COPY .env .env

# build app for production with minification
EXPOSE 3000
ENTRYPOINT npm run dev



# FROM node:lts-alpine as build-stage

# WORKDIR /app

# COPY package*.json ./
# COPY default.conf ./

# RUN npm install

# COPY . .
# COPY .env .env
# RUN npm run build

# FROM nginx:stable-alpine as production-stage
# COPY default.conf ./
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# RUN rm -rf /etc/nginx/conf.d/default.conf
# RUN mv ./default.conf /etc/nginx/conf.d/default.conf
# CMD ["nginx", "-g", "daemon off;"]
# # CMD [ "npm", "run", "dev" ]
