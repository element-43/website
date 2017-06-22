FROM nginx

MAINTAINER Kieran O\'Neill

# Remove default configuration.
RUN rm -rf /etc/nginx

# Copy configuration file.
COPY nginx.conf /etc/nginx/nginx.conf

# Stop container stopping - "daemon off;"
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# Expose ports
EXPOSE 80
EXPOSE 443

# Start Nginx
CMD service nginx start
