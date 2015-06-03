require('jquery');
require('angular');
require('angular-route');
require('angular-sanitize');
require('lodash');
require('./lazada-phone-compare/lazada-phone-compare-module');

angular.module('app', ['ngRoute', 'ngSanitize', 'lazada-phone-compare']);

$(document).ready(function () {
  angular.bootstrap(document.getElementById('app'), ['app']);
});