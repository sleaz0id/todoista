FROM ruby:2.5.3

RUN curl --silent --location https://deb.nodesource.com/setup_11.x | bash -
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN npm install -g yarn

ENV APP_ROOT /var/www/todoista
RUN mkdir -p $APP_ROOT

WORKDIR $APP_ROOT

ENV RAILS_ENV development
ENV RACK_ENV development 
ENV NODE_ENV development 

COPY Gemfile* $APP_ROOT/

RUN bundle install --jobs 4 --retry 3
RUN yarn install

ADD . $APP_ROOT/

RUN apt-get autoremove && apt-get clean && rm -rf /var/tmp/**/*
