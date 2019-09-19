# Products API

[![Build Status](https://travis-ci.org/meetKazuki/products.svg?branch=develop)](https://travis-ci.org/meetKazuki/products)
[![Coverage Status](https://coveralls.io/repos/github/meetKazuki/products/badge.svg?branch=develop)](https://coveralls.io/github/meetKazuki/products?branch=develop)


## Overview

<details>
  <summary>Demo Users</summary>

> | Email Address               | Password       | Access       |
> | --------------------------- | --------       | ------------ |
> | `rheaphy9@123-reg.co.uk`    | adminsecret    | Admin access |
> | `mwysome0@epa.gov`          | 12345678       | User access  |

</details>


## Project Pipeline

- [Hosted API](https://productsapi-staging.herokuapp.com/)
- [API Docs](https://productsapi-staging.herokuapp.com/api/v1/docs)
- [Postman Documentation](https://documenter.getpostman.com/view/7505181/SVmwxJSm)
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


## HTTP Requests

All API requests are made by sending a secure HTTPS request using one of the following methods, depending on the action being taken:

- `POST` Create a resource
- `GET` Get a resource or list of resources
<!-- - `PATCH` Update a resource -->
<!-- - `DELETE` Delete a resource -->

For `POST` requests, the body of your request may include a JSON payload.

### HTTP Response Codes

Each response will be returned with one of the following HTTP status codes:

- `200` `OK` The request was successful
- `400` `Bad Request` There was a problem with the request (security, malformed)
- `401` `Unauthorized` The supplied API credentials are invalid
- `403` `Forbidden` The credentials provided do not have permissions to access the requested resource
- `404` `Not Found` An attempt was made to access a resource that does not exist in the API
- `500` `Server Error` An error on the server occurred

### API ENDPOINTS

#### Authentication

| URI                              | HTTP Method | Description       |
| -------------------------------- | ----------- | ----------------- |
| <code>/api/v1/auth/signup</code> | `POST`      | Create an account |
| <code>/api/v1/auth/signin</code> | `POST`      | Log-in to account |

#### API Routes

| URI                                                     | HTTP Method | Description                               |
| ------------------------------------------------------- | ----------- | ----------------------------------------- |
| <code>/api/v1/users</code>                              | `GET`       | Fetch all Users                           |
| <code>/api/v1/products</code>                           | `GET`       | Fetch all products                        |
| <code>/api/v1/products/{productId}                      | `GET`       | Fetch a product by ID                     |
| <code>/api/v1/sales/</code>                             | `GET`       | Fetch all sales                           |
| <code>/api/v1/sales/{saleId}</code>                     | `GET`       | Fetch a single sale record by id          |
| <code>/api/v1/products/new</code>                       | `POST`      | Create a new product                      |
| <code>/api/v1/sales/new</code>                          | `POST`      | Create a new sales record                 |

## Inspiration/Resources
▶️ [Restful API with NodeJS, Express, PostgreSQL, Sequelize, Travis, Mocha, Coveralls and Code Climate.](https://medium.com/@victorsteven/restful-api-with-nodejs-express-postgresql-sequelize-travis-mocha-coveralls-and-code-climate-f28715f7a014) by [Steven Victor](https://github.com/victorsteven/Book-app-NodeJS-PostgreSQL-Travis-Coveralls-Code-Climate)


## License

The ProductsAPI project is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).
