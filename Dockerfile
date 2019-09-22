FROM nginx:alpine
COPY ./dist/personal-website /usr/share/nginx/html
