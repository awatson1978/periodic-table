
Session.setDefault('zoom', 100);

Template.navbarFooter.events({
  'click #zoomIn': function(){
    Session.set('zoom', Session.get('zoom') + 10);
    console.log('zoom', Session.get('zoom') + "%");
  },
  'click #zoomOut': function(){
    Session.set('zoom', Session.get('zoom') - 10);
    console.log('zoom', Session.get('zoom') + "%");
  }
});


Template.navbarFooter.helpers({

});
