(function() {
  var UI;

  UI = (function() {
    function UI() {}

    UI.prototype.navBarConfig = function() {
      return $(window).scroll((function(_this) {
        return function() {
          return _this.navBarStyleChangeByScrollTop();
        };
      })(this));
    };

    UI.prototype.navBarStyleChangeByScrollTop = function() {
      if ($(window).scrollTop() > 400) {
        return $(".navbar-default").css("background-color", "#333333");
      } else {
        return $(".navbar-default").css("background-color", "rgba(51, 51, 51, 0.5)");
      }
    };

    return UI;

  })();

  window.UI = UI;

}).call(this);
