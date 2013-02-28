'use strict';

/* App Module */

angular.module('lrhapp', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when('', {templateUrl: 'partials/index.html', controller: HomeCtrl}).
	when('/', {templateUrl: 'partials/index.html', controller: HomeCtrl}).
	when('/index', {templateUrl: 'partials/index.html', controller: HomeCtrl}).
	when('/work', {templateUrl: 'partials/work.html', controller: WorkCtrl}).
	when('/work/poetry', {templateUrl: 'partials/poetry.html',   controller: PoetryCtrl}).
	when('/work/translation', {templateUrl: 'partials/translation.html', controller: TranslationCtrl}).
	when('/work/digihum', {templateUrl: 'partials/digihum.html', controller: DigiHumCtrl}).
	when('/work/hr', {templateUrl: 'partials/hr.html', controller: HumanRightsCtrl}).
	when('/work/dev', {templateUrl: 'partials/dev.html', controller: DevCtrl}).
	when('/work/dev/portfolio', {templateUrl: 'partials/portfolio.html', controller: PortCtrl}).
	when('/work/dev/themes', {templateUrl: 'partials/themes.html', controller: ThemesCtrl}).
	when('/pubs', {templateUrl: 'partials/pubs.html', controller: PubsCtrl}).
  	when('/pubs/pandt', {templateUrl: 'partials/pandt.html', controller: PoetryAndTransCtrl}).
	when('/pubs/articles', {templateUrl: 'partials/articles.html', controller: ArticlesCtrl}).
  	when('/bio', {templateUrl: 'partials/bio.html', controller: BioCtrl}).
	when('/contact', {templateUrl: 'partials/contact.html', controller: ContactCtrl}).
	when('/sitemap', {templateUrl: 'partials/sitemap.html', controller: SitemapCtrl}).
	when('/blog', {templateUrl: 'partials/blog.html', controller: BlogCtrl}).
	  otherwise({redirectTo: '/'});
}]);
