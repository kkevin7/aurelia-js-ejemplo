FROM node:10

RUN apt-get -y install git

# Create app directory
WORKDIR /usr/src/app
RUN cd /usr/src/app
RUN git clone https://github.com/kkevin7/aurelia-js-ejemplo.git
RUN cd /aurelia-js-ejemplo/

RUN npm i -g aurelia-cli
RUN npm i

EXPOSE 8181
CMD [ "au run --watch" ]