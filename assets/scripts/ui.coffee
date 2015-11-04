class UI
  constructor: ->

  navBarConfig: ->
    $(window).scroll =>
      console.log @
      @navBarStyleChangeByScrollTop()

  navBarStyleChangeByScrollTop: ->
    if $(window).scrollTop() > 400
      $(".navbar-default").css("background-color", "#333")

window.UI = UI
