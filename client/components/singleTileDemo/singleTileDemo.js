

Template.singleTileDemo.onRendered(function() {


    Famous.Engine.init();
    var scene = Famous.Engine.createScene('div#famousScene');

    var rootNode = scene.addChild();


    rootNode
        .setSizeMode('absolute', 'absolute', 'absolute')
        .setAbsoluteSize(360, 480)
        .setAlign(0.5, 0.5, 10)
        .setMountPoint(0.5, 0.5)
        .setOrigin(0.5, 0.5,10);


    var colors = ["Red", "Blue", "Green"];

    Elements.find().fetch().forEach(function(element){
      console.log("element", element);
    });

    colors.forEach(function(color, index){
      console.log("color", color);

      var foo = rootNode.addChild();

      foo
        .setSizeMode('absolute', 'absolute', 'absolute')
        .setAbsoluteSize(120, 160)
        .setAlign(index + 0.5, 0.5,10)
        .setMountPoint(index + 0.5, 0.5)
        .setOrigin(0.5 + index, 0.5 + index, 10)


      var element = new Famous.DOMElement(foo, {
          tagName: 'div',
          //content: color + "<br>" + index,
          content: $('#sampleText').html(),
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

    });



    /*var element2 = new Famous.DOMElement(rootNode, {
        tagName: 'img',
        content: 'Famo.us Mixed Mode Examples!',
        properties: {
            'border':'1px solid black',
            'background-color':'rgba(73, 160, 154, 0.160784)',
            'color':'white',
            'text-align':'center',
            'cursor': 'pointer',
            'opacity': '.99999',
            'letter-spacing': '2px',
            'background-repeat': 'no-repeat',
            'background-size': '50% 50%',
        }
    }).setAttribute('src', 'panel-item-ticks-hq.png');*/


    var spinner = rootNode.addComponent({
        onUpdate: function(time) {
            rootNode.setRotation(0, time / 1000, 0);
            rootNode.requestUpdateOnNextTick(spinner);
        }
    });
    rootNode.requestUpdate(spinner);


});
