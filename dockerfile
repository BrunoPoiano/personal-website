FROM nginx

COPY . /usr/share/nginx/html

RUN apt-get update && apt-get upgrade && apt-get install git