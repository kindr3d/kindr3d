### This is our attempt to create a place for people like us and learn a thing or two

## Ideas
* ~~learn some hardware by hosting and dockerising the server side ourselves~~
* ~~use React, Node.js, Jest, Express to create a bookclub/skillsharing/support network~~
* setup our own testing suit (TravisCI)
* document everything we do and write posts about it to help other learners
* accessibility
* TDD


## TODO
- [x] agree on the concept, sketch architecture and MVP
- [x] setup priorities for Micaela and Elvina
- [x] setup linting rules
- [x] figure out if we use branching or work in the master
- [x] config mongoose
- [x] supertest setup
- [ ] routes tests http://mherman.org/blog/2016/09/12/testing-node-and-express/#.WZBUm0tLfNQ
- [ ] user validation http://mongoosejs.com/docs/validation.html
- [ ] user authentication https://www.djamware.com/post/58eba06380aca72673af8500/node-express-mongoose-and-passportjs-rest-api-authentication
- [ ] clear db and population (seeds?)
- [ ] better pretest (environment, running db)
- [ ] env variables
- [ ] coding style preferences

## MVP
Tool to create subreddit like study or reading groups with posts sorted chronologically that users can comment on. Comments are sorted by up/downvotes.
Basic things MVP has to do:
* register/login/edit/delete user
* create/delete/edit/join/leave a group
* add/edit/delete a posts
* write/delete/edit a comment for a post
* upvote or downvote a comment

## STACK
* Node.js
* Express
* heroku
* mongoose
* http2
* Sinon+mocha+chai
* grid/flexbox

## SCHEDULE
- [x] 1 week(30.07.17): talked about concept/stack/design
- [x] 2 week: setup a server and database, initial test
- [ ] 3 week: define routes and models with tests and deploy
- [ ] 4 week: start minimal frontend setup
