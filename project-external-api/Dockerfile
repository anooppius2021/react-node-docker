#docker build -t <docker id>/<repo/project name>:<version> .

#create a container with basic folder structure
# Create app directory
# Any following command will be executed relative to this path in the container
FROM node:alpine

# WORKDIR <container file path>
#Any following command will be executed relative to this path in the container
WORKDIR /app/project-external

#Host Volumes
#           HOST FOLDER    <===Reference====  Docker Container Folder
#
#   => Host Volume  =>
#       => VOLUME <Host file path(to save all persistant info from container)> : <container file path(file path to statefull info in container) >
#  => Anonymous Volumes
#        => VOLUME <container file path of the data to be persisted>
#               => will be automatically mapped to a directory in Host
#   =>  Named Volumes
#           =>VOLUME <name>:<container file path of the data to be persisted>
VOLUME /tmp/externalapi
# COPY <from> <to>
#<from> => path to folder to copy from local machine relative to build context
#<to> => place to copy stuff inside container
COPY package.json ./


# If you are building your code for production
#RUN npm install --only=production
RUN npm install



# Bundle app source
COPY . .


CMD [ "npm", "start" ]
