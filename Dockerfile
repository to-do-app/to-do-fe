FROM node:14 as build
LABEL org.opencontainers.image.source https://github.com/to-do-app/frontend

WORKDIR /frontend

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.19	

COPY --from=build /frontend/build /usr/share/nginx/html
COPY --from=build /frontend/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
