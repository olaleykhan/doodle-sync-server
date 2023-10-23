#Specify Parent Image
FROM node:17-alpine

# working directory
WORKDIR /app
# copy application source code into working directory
COPY . .
# Expose port (optional when working with cli. why?)

# commands to run after docker container has been instantiated
CMD ["node", "-esm", "src/server.ts"]
