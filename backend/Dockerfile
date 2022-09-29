FROM node:18-alpine3.15
COPY src src
WORKDIR /src
RUN npm install -g @nestjs/cli
COPY package.json ./package.json
COPY tsconfig.build.json ./tsconfig.build.json
COPY tsconfig.json ./tsconfig.json
RUN npm install
ENTRYPOINT ["npm"]
CMD ["run", "start:dev"]