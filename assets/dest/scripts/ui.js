(function() {
  var UI;

  UI = (function() {
    function UI() {}

    UI.prototype.navBarConfig = function() {
      return $(window).scroll((function(_this) {
        return function() {
          console.log(_this);
          return _this.navBarStyleChangeByScrollTop();
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
