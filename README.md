

### Live Link: 
[https://spaced-repitition-rebecca-seyi.vercel.app](https://spaced-repitition-rebecca-seyi.vercel.app)

### Server Repo:
[https://github.com/thinkful-ei-panda/Spaced-Repetition-Server-Rebecca-Seyi](https://github.com/thinkful-ei-panda/Spaced-Repetition-Server-Rebecca-Seyi)

# Spaced repetition API!

### Summary

The user will have the option to log in or sign up, and then will be directed to a dashboard displaying their total correct answer, a list of French words to memorize, as well as the number of times they got each word wrong or right. 

<br />

## Local dev setup

If using user `dunder_mifflin`:

```bash
mv example.env .env
createdb -U dunder_mifflin spaced-repetition
createdb -U dunder_mifflin spaced-repetition-test
```

If your `dunder_mifflin` user has a password be sure to set it in `.env` for all appropriate fields. Or if using a different user, update appropriately.

```bash
npm install
npm run migrate
env MIGRATION_DB_NAME=spaced-repetition-test npm run migrate
```

And `npm test` should work at this point

## Configuring Postgres

For tests involving time to run properly, configure your Postgres database to run in the UTC timezone.

1. Locate the `postgresql.conf` file for your Postgres installation.
   1. E.g. for an OS X, Homebrew install: `/usr/local/var/postgres/postgresql.conf`
   2. E.g. on Windows, _maybe_: `C:\Program Files\PostgreSQL\11.2\data\postgresql.conf`
   3. E.g  on Ubuntu 18.04 probably: '/etc/postgresql/10/main/postgresql.conf'
2. Find the `timezone` line and set it to `UTC`:

```conf
# - Locale and Formatting -

datestyle = 'iso, mdy'
#intervalstyle = 'postgres'
timezone = 'UTC'
#timezone_abbreviations = 'Default'     # Select the set of available time zone
```

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests mode `npm test`

Run the migrations up `npm run migrate`

Run the migrations down `npm run migrate -- 0`


## Routes
### Auth Routes

#### POST api/auth/token
This post route requires a {username,password} in request body and log in a user.
This route is used to login to the server and return a jwt token for a user to store in local storage.

### User Routes

####  POST api/user
This post route requires a {username,password} in request body and post anew user in the database.
This route is used to create a whole new user in the DB.


### Language Routes
before any request to this route requires auth token to get data from the database.

####  GET api/language
This route gets all the languages and words for that language with all neccessary information for it.

####  GET api/language/head
This route gets the head of the words list of the current language the user is using.

####  POST api/language/guess
This post requires {guess} in request body and lets user post a guess into the database. This routes checks for the current head and compares the guess inserted to the current head of the list.It decrements or increments if the guess is correct or wrong and changes the database current head to the next question.Uses a linked list implementation to establish the list and get populated back into the DB.
