"use strict";
const common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state() {
    return {
      current: 0
    };
  }
});
exports.store = store;
