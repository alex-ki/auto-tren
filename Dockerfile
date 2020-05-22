FROM node:14-buster

RUN export DEBIAN_FRONTEND=noninteractive \
  && apt-get update \
  && apt-get install -yq --no-install-recommends sudo curl wget iproute2 net-tools iputils-ping expect build-essential \
  && apt-get install -yq --no-install-recommends chromium \
  && apt-get -y autoremove \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /root

ADD . ./
RUN npm install

RUN chromium --product-version

RUN chmod +x /root/entrypoint.sh
RUN chmod +x /root/node_modules/nightwatch/bin/nightwatch

EXPOSE 9515

#ENTRYPOINT ["/root/node_modules/nightwatch/bin/nightwatch"]
ENV name AlexK
ENTRYPOINT ["/bin/bash", "-c", "echo Hello, $name"]


