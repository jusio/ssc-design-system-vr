FROM node:16
RUN apt-get update \
&& apt-get install -y chromium \
&& apt-get install -y ca-certificates \
fonts-liberation \
libappindicator3-1 \
libasound2 \
libatk-bridge2.0-0 \
libatk1.0-0 \
libc6 \
libcairo2 \
libcups2 \
libdbus-1-3 \
libexpat1 \
libfontconfig1 \
libgbm1 \
libgcc1 \
libglib2.0-0 \
libgtk-3-0 \
libnspr4 \
libnss3 \
libpango-1.0-0 \
libpangocairo-1.0-0 \
libstdc++6 \
libx11-6 \
libx11-xcb1 \
libxcb1 \
libxcomposite1 \
libxcursor1 \
libxdamage1 \
libxext6 \
libxfixes3 \
libxi6 \
libxrandr2 \
libxrender1 \
libxss1 \
libxtst6 \
lsb-release \
wget \
xdg-utils


WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
RUN yarn --frozen-lockfile || (tail -30 yarn-error.log && exit 1)
COPY bin bin

ENV PATH="$PATH:/usr/src/app/node_modules/.bin/"
ENV STORYBOOK_URL="http://host.docker.internal:8008"
ENV SNAPSHOT_DIR="/usr/src/app/snapshots"
