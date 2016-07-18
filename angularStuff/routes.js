angular.module('routerApp')
    .config(function($stateProvider, $urlRouterProvider) {

        //This is a catch all for our routes

        $urlRouterProvider.otherwise("/");

        $stateProvider.state('home', {
                      url: "/",
                      templateUrl: "views/home.html"
              })
              .state('contact' ,{
                      url:"/contact",
                      templateUrl:"views/contact.html"
              })
              .state('studio' ,{
                  url:"/studio",
                  templateUrl:"views/studio.html"
              })
              .state('projects' ,{
                  url:"/projects/:type",
                  templateUrl:"views/projects.html"
              })
              // We will need to pull params from the url here and populate the view based off that param
              .state('pricing' ,{
                  url:"/pricing",
                  templateUrl:"views/pricing.html"
              });
//       We need to configure our routes here


});
