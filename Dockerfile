FROM node:14-buster

RUN export DEBIAN_FRONTEND=noninteractive \
  && apt-get update \
  && apt-get install -yq --no-install-recommends sudo curl wget iproute2 net-tools iputils-ping expect build-essential \
  && apt-get install -yq --no-install-recommends chromium \
  && apt-get -y autoremove \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

#WORKDIR /root

#ADD . ./

RUN npm install

EXPOSE 9515

ENTRYPOINT ["/root/entrypoint.sh"]


