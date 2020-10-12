const db = require("../models");

module.exports = {
    remove: function(req, res) {
        db.Post.findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}