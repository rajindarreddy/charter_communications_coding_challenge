An API Developed for Charter Communications Coding challenge using Node.js, Express.js, Typescript, Sequlize, PostgresSQL, Jest Test Framework & Swagger for API documentation.

# What are the Pre-requisites?

Binaries      | Version
------------- | -------------
NodeJS        | >= LTS
NPM           | >= 6.14.6
PostgreSQL    | >= 12.1
ts-node-dev   | >= 1.0.0


# How to SetUp & Install?

```sh
# Clone the repository
git clone 

UPDATE .env file with your DB details
# Add your database details
 user: 'db_username',
 password: 'db_password',
 database: 'db_dbname',
 host: 'db_host',

 #Seeding data to the database

 sequelize db:seed:all

# Goto the source code
cd;

# Install NPM dependencies
npm install;

# Test
npm test;

# Pre-defined routes

| Network                      | Package             | Shows                   |
| -----------------------------| -----------------  | ------------------------ |
|`/api/networks`               |`api/packages`      | `/api/shows`             |
|`/api/network`                |`/api/packages/{id}`| `/api/shows?package_id=1`|
|                              |                    | `/api/shows?network_id=2`|
# How to Run?

### Development Environment

```sh
npm run dev;
```

# How to access the API Documentation?

- Try accessing the http://`<HOST>:<PORT>`/swagger
- Note: Remember to replace the "HOST" & "IP" with your HOST & PORT number.