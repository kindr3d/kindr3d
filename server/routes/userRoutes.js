const express = require('express');
const User = require('../../lib/models/user');

const userRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log('Users');
  next();
})
// User routes
userRouter.post('/', (req, res) => {
  User.create({name: req.body.name}, (err, user) => {
    if (err)
    res.send(err);

    res.json(user);
  });
});
userRouter.get('/', (req, res) => {
  User.find((err, users) => {
    if (err)
    res.status(500).send(err);

    res.json(users);
  });
});

userRouter.route('/:user_id')
  .get((req, res) => {
    User.findById(req.params.user_id, (err, user) => {
      if (err)
        res.status(500).send(err);

      res.json(user);
    })
  })
  .put((req, res) => {
    User.findOneAndUpdate({_id: req.params.user_id}, {name: req.body.name}, null, (err, user) => {
      if (err)
        res.status(500).send(err);

      res.json({user, message: 'user updated'});
    });
  })
  .delete((req, res) => {
    User.remove({
      _id: req.params.user_id,
    }, (err, user) => {
      if (err)
        res.status(500).send(err);

      res.json({user, message: 'user deleted'});
    });
  });

module.exports = userRouter;
