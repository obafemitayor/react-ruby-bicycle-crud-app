### Getting started

This is a simple CRUD application built with React, Ruby and GraphQL that creates, fetches, updates and delete bicycles in a server.

#### *How to set up the app locally*

1. Install Docker & docker-compose
2. Clone this repository
3. Add this line to `/etc/hosts` on your machine:

   ```
   127.0.0.1 crucible.test
   127.0.0.1 www.crucible.test
   ```

4. Run `docker-compose up` from the root directory
5. View the app at http://crucible.test. 

### *How to run commands in Docker*

To run commands inside the context of the `web` container, where the app runs, you will first need to start a bash session using `docker-compose`:

```sh
$ docker-compose run web bash
```

You can then use that terminal to run any `yarn` or `rails` commands that you might need.

### *How to run the integration tests*

To run the integration tests, you will first need to start a bash session using `docker-compose`:

```sh
$ docker-compose run web bash
```.

Then you can use bash commands to run the tests, You can either run all at once with this command

`bundle exec rails test`, or you can run the tests individual with the following commands:

1) To run the integration test for updatebicycle mutation use `bundle exec rails test test/graphql/mutations/update_bicycle_mutation_test.rb`
2) To run the integration test for deletebicycle mutation use `bundle exec rails test test/graphql/mutations/delete_bicycle_mutation_test.rb`