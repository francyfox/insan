FROM node:22.1.0-alpine3.19

ENV APP_ROOT /web
ENV NODE_ENV=production
ENV NUXT_PORT=3000
ENV NITRO_PORT=3000
ENV NITRO_HOST=nuxt
ENV NUXT_HOST=nuxt

WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

RUN pnpm run build
CMD ["node", ".output/server/index.mjs"]