class UI
  constructor: ->

  navBarConfig: ->
    $(window).scroll =>
      @navBarStyleChangeByScrollTop()

  navBarStyleChangeByScrollTop: ->
    if $(window).scrollTop() > 400
      $(".navbar-default").css("background-color", "#333333")
    else
      $(".navbar-default").css("background-color", "rgba(51, 51, 51, 0.5)")

window.UI = UI
