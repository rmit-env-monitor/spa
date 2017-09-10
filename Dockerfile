FROM node:boron

# Create directory
RUN mkdir -p /var/app
WORKDIR /var/app

# Install app dependencies
COPY package.json /var/app

# Bundle source code
COPY . /var/app