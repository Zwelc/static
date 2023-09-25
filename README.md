# static

Originally a technical assessment

## Description

This project made use of [Nest](https://github.com/nestjs/nest) for the backend and [React](https://github.com/facebook/react). It serves a compiled version of the react app at the `/` root and all api requests are mapped to `/api`. The swagger interface can be found on `/api/docs/`

Navigate to `localhost:8080` to see it in action

## Features

- Landing page
- Registration page
- Login page
- Dashboard page
- Swagger interface
- Username + password authentication

## Installation

```bash
# Install dependencies
$ npm install

```

Create a `.env` file with the following

```env
JWT_SECRET: {{your secret goes here}}
PORT: {{your preferred port goes here}}
```

## Running the demo

Run the following

```bash
npm run demo
```

## Development

```bash
# backend

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# frontend

# development
$ cd ./client && npm run start


```
