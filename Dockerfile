FROM cypress/included:15.2.0

WORKDIR /e2e
COPY package*.json ./
RUN npm ci || npm i
COPY . .

RUN mkdir -p results
CMD ["npm", "run", "test:ex04"]
