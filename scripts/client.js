var myApp = angular.module('BasicApp', []);

myApp.controller('BasicController', function(){
  console.log('Basic controller is ready to go!');
  var self = this;
  self.firstExampleVariable = 'queso';
  self.secondExampleVariable = 'salsa';
  self.newFavoriteThing = {};
  // self.newFavoriteThing = {name: 'Hockey', happinessPoints: '1500000'};
  self.krissFavoriteThings = [
    {
      name: 'Hockey',
      happinessPoints: 1500000
    },
    {
      name: 'Luca',
      happinessPoints: 1750000
    },
    {
      name: 'Jumbo Pie Reeses',
      happinessPoints: 500000
    }
  ];
  self.addNewFavoriteThing = function() {
    console.log('You did it!');
    self.krissFavoriteThings.push(angular.copy(self.newFavoriteThing));
  }
});
