'use strict';

(function(module) {
  const statsController = {};

  statsController.init = function(){
    $('#about-us').hide();
    $('#home-page').hide();
    $('#game-stats').fadeIn();
  }
  module.statsController = statsController;
})(window)
