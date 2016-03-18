
//--------------------------------------------------------------
// Global Configuration


Router.configure({
  // we use the  appLayout template to define the layout for the entire app
  layoutTemplate: 'appLayout',

  // the pageNotFound template is used for unknown routes and missing lists
  notFoundTemplate: 'pageNotFound',

  // show the appLoading template whilst the subscriptions below load their data
  loadingTemplate: 'appLoading',

  yieldTemplates: {
    'sidebar': {
      to: 'westPanel'
    },
    'navbarHeader': {to: 'header'},
    'navbarFooter': {to: 'footer'}
  }
});

Router.route('/', {
  template: "transformsGrid",
  name: "homePage",
  waitOn: function () {
    return Meteor.subscribe('Elements');
  }
});

Router.route('/blaze', {
  template: "periodicTablePage",
  name: "periodicTablePage",
  waitOn: function () {
    return Meteor.subscribe('Elements');
  }
});

Router.route('/info', {
  template: "infoPage",
  name: "infoPage"
});


Router.route('/demo', {
  template: "transformsGrid",
  name: "demoRoutes"
});

Router.onBeforeAction(function(){
  $('div#famousScene .famous-dom-renderer').remove();
  this.next();
});
