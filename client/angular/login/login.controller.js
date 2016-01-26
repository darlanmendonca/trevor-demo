/* globals angular */
'use strict';

angular
  .module('demo')
  .controller('LoginController', LoginController);

function LoginController (TranslateFactory, $state, AuthFactory) {
  this.auth = ()=> {
    AuthFactory
      .login(this.user)
      .then(redirect);
  };

  this.today = new Date();
  this.locales = TranslateFactory.locales;

  function redirect() {
    $state.go('admin.sites');
  }
}
