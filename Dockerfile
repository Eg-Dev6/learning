FROM node
WORKDIR /learning_jenkins
COPY api /learning_jenkins/api
COPY package.json /learning_jenkins
COPY tsconfig.json /learning_jenkins
COPY .prettierrc /learning_jenkins
RUN npm install
RUN npm run build
EXPOSE 2000
CMD ["node", "/learning_jenkins/dist/index.js"]