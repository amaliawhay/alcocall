var orm = require("../config/orm.js");

var userInfo = {
  all: function (cb) {
    orm.all("userInfo", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.create("userInfo", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("userInfo", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("userInfo", condition, function (res) {
      cb(res);
    });
  }
};

module.exports = userInfo;
