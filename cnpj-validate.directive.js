angular.module('angular-cnpj', [])
.directive('cnpj', function () {
  return {
    restrict: 'A',
    require: '^ngModel',
    link: function (scope, element, attrs, ctrl) {
      ctrl.$validators['cnpj'] = function(modelValue, viewValue) {
        var isValid = true;

        if (!ctrl.$isEmpty(modelValue)) {
          isValid = validate(modelValue);
        }
        return isValid;
      };

      var validate = function (str) {
        if (str == null)
          return false;

        var cnpj = str.replace(/\D/g, '');

        if (cnpj == '')
          return false;

        if (cnpj.length != 14)
          return false;

        var size;
        var numbers;
        var digits;
        var sum;
        var pos;

        // Regex to validate strings with 14 same characters
        var regex = /([0]{14}|[1]{14}|[2]{14}|[3]{14}|[4]{14}|[5]{14}|[6]{14}|[7]{14}|[8]{14}|[9]{14})/g
        // Regex builder
        var patt = new RegExp(regex);
        if (patt.test(cnpj))
          return false;

        size = cnpj.length - 2
        numbers = cnpj.substring(0, size);
        digits = cnpj.substring(size);
        sum = 0;
        pos = size - 7;

        var i;
        for (i = size; i >= 1; i--) {
          sum += numbers.charAt(size - i) * pos--;
          if (pos < 2)
            pos = 9;
        }

        var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result != digits.charAt(0))
          return false;

        size = size + 1;
        numbers = cnpj.substring(0, size);
        sum = 0;
        pos = size - 7;
        for (i = size; i >= 1; i--) {
          sum += numbers.charAt(size - i) * pos--;
          if (pos < 2)
            pos = 9;
        }
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result != digits.charAt(1))
          return false;

        return true;
      }
    }
  };
});
