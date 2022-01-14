FROM node:16 as AppBuilder

ENV CI=true

WORKDIR /usr/src/app

RUN npm install --global lerna

COPY ./lerna.json ./
COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./packages ./packages

RUN npx lerna bootstrap
RUN npm install
RUN npm run release
RUN npx lerna link

# Final Setup
FROM node:16 

WORKDIR /app

ENV DEBUG=*
ENV USE_STATIC_ASSETS=true

COPY --from=AppBuilder ./usr/src/app/ ./
COPY --from=AppBuilder ./usr/src/app/packages/web-app/build ./packages/web-api/build/website

WORKDIR packages/web-api

EXPOSE 3030

CMD ["node", "build/src/index.js"]