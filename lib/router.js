
//--------------------------------------------------------------
// Global Configuration

Router.configure({
  //layoutTemplate: 'appLayout',
  yieldTemplates: {
    'navbarHeader': {to: 'header'},
    'navbarFooter': {to: 'footer'}
  }
});


Router.route('/', {
  template: "periodicTablePage",
  name: "periodicTablePage"
});

Router.route('/info', {
  template: "infoPage",
  name: "infoPage"
});


Router.onBeforeAction(function(){
  $('div#famousScene .famous-dom-renderer').remove();
  this.next();
});
