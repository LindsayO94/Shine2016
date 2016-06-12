'use strict';

// Declare app level module which depends on views, and components
(function() {
  var app = angular.module('shine', []);

  app.controller('menuCtrl', function () {
    this.active = true;
    this.tab = 'Menu';
    this.previous = 'Menu'
    this.meleePools = melee;
    this.smash4Pools = smash4;
    this.selectedMPool = "";
    this.selected4Pool = "";

    this.menuActive = function () {
      return this.active;
    };

    this.setInactive = function () {
      this.active = false;
    };

    this.setActive = function () {
      this.active = true;
    };

    this.setTab = function(newTab) {
      this.tab = newTab;
      if (this.tab === 'Menu') {
        this.active = true;
      }
      if (this.tab === 'Pools') {
        this.previous = 'Menu';
      }
    };
    
    this.checkTab = function(tabCheck) {
      return this.tab === tabCheck;
    };
    
    this.setPrevious = function(prev) {
      this.previous = prev;
    };
    
    this.checkPrevious = function(checkPrev) {
      return this.previous = checkPrev;
    };
    
    this.getPrevious = function() {
      return this.previous;
    };
    
    this.setSelected = function(pool) {
      if (pool === "Pool 1") {
        return "selected"
      }
      return "no"
    };

  });

  var melee= [
    {
      name: 'Pool 1',
      location: 'A1',
      wave: '1',
      time: '9:00 AM',
      players: [
        {
          tag: "Armada"
        },
        {
          tag: "Mango"
        }
      ]
    },
    {
      name: 'Pool 2',
      location: 'A2',
      wave: '1',
      time: '9:00 AM'
    }
  ];

  var smash4 = [
    {
      name: 'Pool 8',
      location: 'D2',
      wave: '1',
      time: '9:00 AM',
      players: [
        {
          tag: "Armada"
        },
        {
          tag: "Mango"
        }
      ]
    },
    {
      name: 'Pool 9',
      location: 'D3',
      wave: '2',
      time: '11:00 AM'
    }
  ];

  app.controller('poolController', function (){

  });
})();
