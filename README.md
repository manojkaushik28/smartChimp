# Smart-Chimp Employee Service Portal
======================================

[![NPM version](https://badge.fury.io/js/accepts.svg)](http://badge.fury.io/js/accepts)
[![Build Status](https://travis-ci.org/expressjs/accepts.svg?branch=master)](https://github.com/manojkaushik28/smartChimp)
[![Coverage Status](https://img.shields.io/coveralls/expressjs/accepts.svg?branch=master)](https://github.com/manojkaushik28/smartChimp)

### introduction

Samrt-Chimp, it allows:

- User login
	- Local Authentication
	- faceBook Authentication
	- twitter Authentication
	- google Authentication
- User role as `admin` & `user` & `guset`.
- Payslip genrator.

## API

### User management api

```js
 * post    /auth/local   ----> Login        
 * post    /auth/facebook | google | twitter  --- Login & singup         
 * GET     /api/users           
 * POST    /api/users    ----> Singup         
 * GET     /api/users/me ---> get personal infomation         
 * PUT     /api/users/:id/password ---> Change password         
 * DELETE  /api/users/:id          
```

### Employee management api

```js
 * GET     /api/employees    -> Get All Employee [pagination is not there](https://www.npmjs.com/package/mongoose-paginate)         
 * POST    /api/employees    ----> Create Employee         
 * POST  /api/employees/salary-slip/genrate ->  `Body parameter` content-type will be `application/x-www-form-urlencoded`
 	- empName
 	- anualSalary        
 	- superRate        
 	- salaryStartDate        
```

### Tax Slab Service

```js
	- taxCalucation (pass the calender year & anual salary)
	**** Note **** for now taxslab data is static
	- Make the `seed paramter true` in `server/confif/environment/development.js` it will load the in Database 
```

### How to run

Run following commands

<pre>
	<code>
	git clone https://github.com/manojkaushik28/smartChimp.git
	npm install
	bower install
	npm start `Without nodemon`
	npm dev `With nodemon`
	npm debug `With nodemon in debug mode`
	npm test `Run the test cases`

	node server/app.js `bydefault run on production`
	</code>
</pre>

### Dependencies
This application required following connections to run.
<ol>
<li>grunt</li>
</ol>

## Environment variables
Environment variables is the main mechanism of manipulating application settings. Currently application recognizes
following environment variables:

| Variable             | Default value | Description              |
| -------------------- | ------------- | ------------------------ |
| IP                   | 0.0.0.0       | Address to listen on     |
| PORT                 | 3000          | Port to listen on        |
| NODE_ENV             | development   | Application Enviroment   |

### Command to run in different Enviroment

```js
// in Production
NODE_ENV=production PORT=80 node server/app.js

// in development
NODE_ENV=development PORT=9000 node server/app.js

// in testing
NODE_ENV=testing PORT=9000 node server/app.js

```

### Command With Grunt

### Testing

Running `grunt test` will run the client and server unit tests with karma and mocha.

Use `grunt test:server` to only run server tests.

Use `grunt test:client` to only run client tests.[Test case are not available](https://docs.angularjs.org/guide/unit-testing)

### Environment Variables

Keeping your app secrets and other sensitive information in source control isn't a good idea. To have grunt launch your app with specific environment variables, add them to the git ignored environment config file: `server/config/local.env.js`.

### Build the project

Run `grunt` for building, `grunt serve` for preview, and `grunt serve:dist` for a preview of the built app.

### Project Structure

Overview

```
├── client
│   ├── app                 - All of our app specific components go in here
│   ├── assets              - Custom assets: fonts, images, etc…
│   ├── components          - Our reusable components, non-specific to to our app
│
├── e2e                     - Our protractor end to end tests [Not implmented yet]
│
└── server
    ├── api                 - Our apps server api
    ├── auth                - For handling authentication with different auth strategies
    ├── components          - Our reusable or app-wide components
    ├── config              - Where we do the bulk of our apps configuration
    │   └── local.env.js    - Keep our environment variables out of source control
    │   └── environment     - Configuration specific to the node environment
    └── views               - Server rendered views
```

An example client component in client/app

```
employee
├── employee.js                 - Routes
├── employee.controller.js      - Controller for our employee route
├── employee.services.js        - services for our employee route
├── employee.controller.spec.js - Test
├── employee.html               - View
└── employee.css               	- Styles
```


## License

The MIT License (MIT)

Copyright (c) 2018 Manoj Kaushik manojkaushik28@yahoo.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


