(function() {
  var UI;

  UI = (function() {
    function UI() {}

    UI.prototype.construcor = function() {};

    UI.prototype.navBarConfig = function() {
      return $(window).scroll((function(_this) {
        return function() {
          return _this.navBarSylteChangeByScrollTop();
        };
      })(this));
    };

    UI.prototype.navBarStyleChangeByScrollTop = function() {
      if ($(window).scrollTop() > 400) {
        return $(".navbar-default").css("background-color", "#333");
      }
    };

    return UI;

  })();

  window.UI = UI;

}).call(this);
