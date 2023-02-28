FROM ruby:3.1.1

RUN gem install bundler

# Javascript
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
RUN npm install yarn -g

# Set up Watchman
# RUN git clone https://github.com/facebook/watchman.git -b v4.9.0 --depth 1 \
#   && cd watchman \
#   && ./autogen.sh \
#   && ./configure --without-python --enable-lenient \
#   && make \
#   && make install

COPY watchman-v2022.05.02.00-linux.zip .
RUN unzip watchman-*-linux.zip \
  && cd watchman-v2022.05.02.00-linux \
  && mkdir -p /usr/local/{bin,lib} /usr/local/var/run/watchman \
  && cp bin/* /usr/local/bin \
  && cp lib/* /usr/local/lib \
  && chmod 755 /usr/local/bin/watchman \
  && chmod 2777 /usr/local/var/run/watchman

VOLUME /www
WORKDIR /www
# We're caching gems in a separate container, so no need to run bundle install

# Expose port for Rails
EXPOSE 80

# Expose port for webpack-dev-server
# EXPOSE 8080

# Run startup script from mounted volume:
CMD ["/bin/bash", "docker/web/startup.sh"]
