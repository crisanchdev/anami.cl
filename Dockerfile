FROM php:8.1-apache

# Instalar herramientas necesarias
RUN apt-get update && apt-get install -y \
    zip \
    unzip \
    git \
    curl

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Establecer el directorio de trabajo
WORKDIR /var/www/html

# Copiar el código fuente
COPY ./src /var/www/html

# Instalar dependencias de Composer (como PHPMailer)
RUN composer require phpmailer/phpmailer
