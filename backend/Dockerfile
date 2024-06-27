FROM php:8.1-cli
WORKDIR /var/www/html
COPY . .
RUN apt-get update && apt-get install -y libzip-dev && docker-php-ext-install zip
CMD ["php", "-S", "0.0.0.0:5000", "-t", "/var/www/html"]
