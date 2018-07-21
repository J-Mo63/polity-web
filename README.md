# Polity Web

This repo contains Polity's React/Redux web-client for their version 2 site.

Polity presents in-depth analysis & research on the latest political commentary & news, guiding you through the whole debate concerning the big issues. Serious news. Condensed.


## Getting Started

If you do not already have Node Package Manager (NPM), you can install it from [npmjs.com](https://www.npmjs.com).

Start by installing dependencies with:

```bash
$ npm install
```

## Running & Testing the Project

To start the gulp process and get the project running at `localhost:8080` run:
```bash
$ npm start
```

To test the project run:

```bash
$ npm test
```

## Deployment

To build a production Docker image from the project files run:
```bash
docker build -t <image-name>:<tag> .
```

For official image releases see the Dockerhub repo [here](https://hub.docker.com/r/jmo63/polity-web/).

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## License

This project is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
