# Products API

[![Build Status](https://travis-ci.org/meetKazuki/products.svg?branch=develop)](https://travis-ci.org/meetKazuki/products)
[![Coverage Status](https://coveralls.io/repos/github/meetKazuki/products/badge.svg?branch=develop)](https://coveralls.io/github/meetKazuki/products?branch=develop)

## Overview


## Project Pipeline

- [Hosted API](https://productsapi-staging.herokuapp.com/)
- [API Docs](https://productsapi-staging.herokuapp.com/docs)
- [Postman Collections](https://www.getpostman.com/collections/f79fa50ac8890d7da743)


## Technologies Used

* NodeJS
* ExpressJS


## Getting Started

### Prerequisites

Ensure that you have the following installed on your local machine:

- [NodeJS](https://nodejs.org/en/download)
- [Git](https://git-scm.com/downloads)

### Running locally

- Make sure you have *NodeJS*, *Git* installed.
- Clone this repository

  ```bash
    - git clone https://github.com/meetKazuki/products.git
    - cd products
    - npm install
  ```
- Run `npm run start:dev` to spin up the server and watch for changes.

### Testing

Test specs are implemented using [mocha](https://mochajs.org) & [chai](https://chaijs.com).

- To test (consume) the API locally, you can make use of [Postman](https://getpostman.com).
- You can also run an automated test by running `npm test`. `npm test` performs a single full test suite run, including code coverage reporting.


## License

The ProductsAPI project is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).
