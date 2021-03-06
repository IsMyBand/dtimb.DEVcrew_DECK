define(['css!./styles.css'], function($__0) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  var css = $traceurRuntime.assertObject($__0).default;
  var $__default = {
    restrict: 'A',
    link: function($element, $attrs) {
      $element.addClass('elgg-icon');
      $element.addClass('elgg-icon-' + $attrs[$traceurRuntime.toProperty('elggIcon')]);
    }
  };
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
