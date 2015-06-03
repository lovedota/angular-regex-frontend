function LazadaPhoneUrlValidationDirective() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attr, ctrl) {
      function lazadaPhoneUrlValidator(ngModelValue) {
        var regex = /http.*?lazada.vn\/.*?.html/;

        if (!ngModelValue) {
          ctrl.$setValidity('lazadaPhoneUrlValidator', true);
        }
        else if (regex.test(ngModelValue)) {
          ctrl.$setValidity('lazadaPhoneUrlValidator', true);
        } else {
          ctrl.$setValidity('lazadaPhoneUrlValidator', false);
        }

        return ngModelValue;
      }

      ctrl.$parsers.push(lazadaPhoneUrlValidator);
    }
  };
}

module.exports = LazadaPhoneUrlValidationDirective;