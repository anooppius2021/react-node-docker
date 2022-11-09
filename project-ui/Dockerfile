#docker build -t <docker id>/<repo/project name>:<version>
FROM node:alpine as builder

# Create app directory
WORKDIR /project-ui
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json .

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

CMD [ "npm", "start" ]

#FROM nginx
#COPY --from=builder /project-ui/build /usr/share/nginx/html
