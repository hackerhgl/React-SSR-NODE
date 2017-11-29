import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';
import Users from './app/Users';
import template from './template';
import bodyParser from 'body-parser';
const server = express();

server.use('/assets', express.static('assets'));
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
server.use(bodyParser.json());

server.get('/', (req, res) => {
  const isMobile = true;
  const initialState = { isMobile };
  const appString = renderToString(<App {...initialState} />);

  res.send(
    template({
      body: appString,
      title: 'Hello World from the server',
      initialState: JSON.stringify(initialState),
    }),
  );
});

server.get('/test', (req, res) => {
  const appString = renderToString(<App {...{ isMobile: false }} />);
  res.send(appString);
});

// user Mock Api from : http://localhost:8080/users
server.post('/users', (req, res) => {
  const appString = renderToString(<Users data={req.body.data} />);
  res.send(appString);
});

server.listen(8080);
console.log('listening on server : 8080');
