const routes = (module.exports = require("next-routes")());

routes
  .add("/campaigns/new", "/campaigns/new")
  .add("/campaigns/:address", "/campaigns/show")
  .add("/campaigns/:address/viewrequest", "/campaigns/selected/viewrequests")
  .add("/campaigns/:address/addrequest", "/campaigns/selected/addrequest");
