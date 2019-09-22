FROM nginx:alpine
WORKDIR /app
COPY . .
COPY /app/dist/personal-website /usr/share/nginx/html
