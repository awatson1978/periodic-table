Meteor.startup(function (){
  Theme.configure({
    appTitle: "Checklist Manifesto",
    background: {
      color: "gradient"
    },
    page: {
      background: "#333333"
    },
    palette: {
      colorA: "#01b9af",
      colorB: "#ffffff",
      colorC: "#f3f3f3",
      colorD: "#52565f",
      colorE: "#333333"
    },
    brand: {
      primary: "#01b9af",
      success: "#00938b",
      info: "#f3f3f3",
      warning: "#52565f",
      danger: "#40434E"
    }
  });
});
