class UI
  construcor: ->

  navBarConfig: ->
    $(window).scroll =>
      @navBarSylteChangeByScrollTop()

  navBarStyleChangeByScrollTop: ->
    if $(window).scrollTop() > 400
      $(".navbar-default").css("background-color", "#333")

window.UI = UI
