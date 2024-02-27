FROM nginx

COPY ./project/index.html /usr/share/nginx/html
COPY ./project/styles.css /usr/share/nginx/html
COPY ./project/script.js /usr/share/nginx/html