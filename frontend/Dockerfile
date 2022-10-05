FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package*.json ./
COPY default.conf ./

RUN npm install

COPY . .
COPY .env .env
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY default.conf ./
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
RUN mv ./default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
# CMD [ "npm", "run", "dev" ]
