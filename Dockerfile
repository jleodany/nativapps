FROM node:18
COPY . .
RUN yarn install
EXPOSE 4000
CMD ["yarn", "start"]