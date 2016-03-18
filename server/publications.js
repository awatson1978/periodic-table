Meteor.publish("Elements", function(elementsId){
    return Elements.find({}, {limit: 36});
});
