require('./lazada-phone-compare.css');

var LazadaPhoneCompareCtrl       = require('./lazada-phone-compare-controller');
var LazadaUrlValidationDirective = require('./lazada-phone-url-validation-directive');

angular.module('lazada-phone-compare', [])
  .controller('LazadaPhoneCompareCtrl', LazadaPhoneCompareCtrl)
  .directive('lazadaUrlValidation', LazadaUrlValidationDirective);
