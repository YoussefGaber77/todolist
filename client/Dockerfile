FROM node:latest as build

WORKDIR /usr/local/app
COPY ./ /usr/local/app/
COPY package*.json ./
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build /usr/local/app/dist/client-angular /usr/share/nginx/html