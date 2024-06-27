FROM node:20 as base

WORKDIR /usr/src/app

FROM base AS build

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine AS prod

WORKDIR /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /usr/src/app/dist .

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]