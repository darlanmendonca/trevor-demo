/* globals angular */
'use strict';

angular
  .module('trevor-demo')
  .controller('UsersController', UsersController);

function UsersController(users, user) {
  this.list = users;
  this.user = user;
}
