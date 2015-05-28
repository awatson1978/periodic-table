

Template.singleTileDemo.onRendered(function() {


    //Meteor.setTimeout(function(){
        Famous.Engine.init();
        var scene = Famous.Engine.createScene('div#famousScene');

        var rootNode = scene.addChild();


        rootNode
            .setSizeMode('absolute', 'absolute', 'absolute')
            .setAbsoluteSize(360, 480)
            .setAlign(0.15, 0.5, 10)
            .setMountPoint(0.5, 0.5)
            .setOrigin(0, 0, 0);


        var elementArray = [
          {
            atomicMass: "1.00794(4)",
            atomicNumber: 1,
            name: "Hydrogen",
            symbol: "H"
          },
          {
            atomicMass: "4.002602(2)",
            atomicNumber: 2,
            name: "Helium",
            symbol: "He"
            },
          {
            atomicMass: "6.941(2)",
            atomicNumber: 3,
            name: "Lithium",
            symbol: "Li"
          }

        ];



        //Elements.find().fetch().forEach(function(element, index){
        elementArray.forEach(function(element, index){
            console.log("element", element);

          var elementNode = rootNode.addChild();

          elementNode
            .setSizeMode('absolute', 'absolute', 'absolute')
            .setAbsoluteSize(120, 160)
            .setAlign((index + 1) * 0.5, 0.5, 10)
            .setMountPoint( 0.5, 0.5)
            .setOrigin(0.5, 0.5, 10)


          new Famous.DOMElement(elementNode, {
              tagName: 'div',
              content: '<span class="atomicNumberText">' + element.atomicNumber + '</span><br><h1 class="center">' + element.symbol + '</h1><h5 class="center">' + element.name + '<br>' + element.atomicMass + '<br></h5>',
              //content: $('#sampleText').html(),
              properties: {
                  'height': '160px',
                  'width': '120px',
                  'color':'white',
                  'cursor': 'pointer',
                  'opacity': '.99999',
                  'letter-spacing': '2px',
                  'display': 'inline-block',
                  'background-color':'rgba(73, 160, 154, 0.160784)',
                  'background-image': "url(panel-item-ticks-hq.png)",
                  'background-repeat': 'no-repeat',
                  'background-size': '100% 100%',
                  '-webkit-box-shadow': '0 0 12px rgba(231,254,237,0.6)',
                  '-webkit-backface-visibility': 'visible',
                  'text-align': 'center',
                  'font-family': '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
                  'font-weight': '300'

              }
          })
          .setAttribute('src', 'panel-item-ticks-hq.png');

          var spinner = elementNode.addComponent({
              onUpdate: function(time) {
                  elementNode.setRotation(0, time / 1000, 0);
                  elementNode.requestUpdateOnNextTick(spinner);
              }
          });
          elementNode.requestUpdate(spinner);

        });
    //}, 500)


});
