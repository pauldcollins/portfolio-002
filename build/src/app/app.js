angular.module( 'ngBoilerplate', [  
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ui.router',
  'smoothScroll'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Paul Collins' ;
    }
  });

  (function ($) {
      $(document).ready(function(){

      // NAVBAR 

          // hide .navbar first
          $(".navbar").hide();

          // fade in .navbar
          $(function () {
              $(window).scroll(function () {

                   // set distance user needs to scroll before we start fadeIn
                  if ($(this).scrollTop() > 100) {
                      $('.navbar').fadeIn();
                  } else {
                      $('.navbar').fadeOut();
                  }
              });
          });     

      });
      }(jQuery));
  })

;

