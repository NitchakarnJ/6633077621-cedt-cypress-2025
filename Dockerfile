FROM cypress/included:15.2.0
WORKDIR /e2e
COPY package*.json ./
RUN npm ci || npm i
COPY . .
ENV DBUS_SESSION_BUS_ADDRESS=/dev/null
RUN mkdir -p results cypress/screenshots cypress/videos
CMD npx cypress run --browser chrome --headless --spec cypress/e2e/EX04-pom.cy.js --reporter junit --reporter-options "mochaFile=results/junit-[hash].xml,toConsole=true" --config video=false -- --disable-dev-shm-usage --no-sandbox
