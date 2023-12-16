ARG BUN_VERSION=1.0.13

FROM oven/bun:${BUN_VERSION} as base

ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .

# Note, the lockfile needs be from a linux system,
# There might be diffrences in packages used between operating systems
COPY bun.lockb .

RUN bun install

FROM node:alpine as build
WORKDIR /app
# Copy installed node modules
COPY --from=base /app/node_modules node_modules
# Copy app files
COPY . .
# Build the app
RUN npm run build-prod

# Bundle static assets with nginx
FROM nginx:stable-alpine3.17 as production
ENV NODE_ENV production
# Copy built assets from base
COPY --from=build /app/dist /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]