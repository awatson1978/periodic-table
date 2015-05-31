
Router.route('/physics', {
  template: "physicsGrid",
  name: "physicsGrid",
  waitOn: function () {
    return Meteor.subscribe('Elements');
  },
});

physicsEngine = null;

Template.physicsGrid.onRendered(function() {
  console.log("Rendering ListOfSpinners");

  console.log("Famous", Famous);

  Famous.Engine.init();

  physicsEngine = new Famous.PhysicsEngine();
  var grav = new Famous.Gravity3D(null, physicsEngine.bodies, {
      strength: -5e7,
      max: 1000,
      anchor: new Famous.Vec3()
  });
  physicsEngine.add(grav);


  var scene = Famous.Engine.createScene('div#famousScene');

  var rootNode = scene.addChild();


  var peUpdater = scene.addComponent({
      onUpdate: function (time) {
                    physicsEngine.update(time);
                    scene.requestUpdateOnNextTick(peUpdater);
                }
  });

  scene.requestUpdate(peUpdater);
  var root = scene.addChild();
  var sized = false;
  root.addComponent({
      onSizeChange: function (size) {
          if (!sized) {
              for (var i = 0 ; i < (totalRows * totalCols) ; i++){
                  Dot(root.addChild(), i, size);
              }
              sized = true;
          }
      }
  });


  Dot = function(node, i, sceneSize) {
      node.setProportionalSize(1 / 12, 1 / 18)
          .setDifferentialSize(-4, -4);

      new Famous.Mesh(node).setGeometry(new Famous.Circle())
                    .setBaseColor(new Famous.Color(createColorStep(i / 18)));

      new Phys(node, sceneSize[0] * (i % totalRows) / totalRows,
                     sceneSize[1] * ((((i / totalRows)|0) % totalCols) / totalCols));
  }
  
  Phys = function(node, x, y) {
      this.id = node.addComponent(this);
      this.node = node;
      this.body = new Famous.Particle({
          mass: 1,
          position: new Famous.Vec3(x, y, 0)
      });
      this.force = new Famous.Spring(null, this.body, {
          period: 0.9,
          dampingRatio: 0.12,
          anchor: new Famous.Vec3(x, y, 0)
      });
      physicsEngine.add(this.body, this.force);
      node.requestUpdate(this.id);
  }
  Phys.prototype.onUpdate = function onUpdate () {
      var pos = this.body.position;
      this.node.setPosition(pos.x, pos.y, pos.z);
      this.node.requestUpdateOnNextTick(this.id);
  }

  createColorStep = function(step, isDom) {
    step -= (step >= totalCols) ? totalCols : 0;
    var r = colors[0][0] - Math.round(((colors[0][0] - colors[1][0]) / totalCols) * step);
    var g = colors[0][1] - Math.round(((colors[0][1] - colors[1][1]) / totalCols) * step);
    var b = colors[0][2] - Math.round(((colors[0][2] - colors[1][2]) / totalCols) * step);
    if (isDom) return 'rgb(' + r + ',' + g + ',' + b + ')';
    return [r, g, b];
  }

  document.addEventListener('mousemove', function (e) {
      grav.anchor.set(e.pageX, e.pageY);
  });
  document.addEventListener('touchmove', function (e) {
      grav.anchor.set(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
      e.preventDefault();
  });

  /*rootNode
      .setSizeMode('absolute', 'absolute', 'absolute')
      .setAbsoluteSize(360, 480)
      .setAlign(0.15, 0.5, 10)
      .setMountPoint(0.5, 0.5)
      .setOrigin(0, 0, 0);


  Elements.find().forEach(function(element, index){
    //elementArray.forEach(function(element, index){
    //console.log("element", element);

    var elementNode = rootNode.addChild();

    elementNode
      .setSizeMode('absolute', 'absolute', 'absolute')
      .setAbsoluteSize(120, 160)
      .setAlign((index + 1) * 0.5, 0.5, 10)
      .setMountPoint( 0.5, 0.5)
      .setOrigin(0.5, 0.5, 10);


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

  });*/
});



Template.singleTileDemo.onDestroyed(function(){
  console.log("Removing PhysicsGrid");
  $('div#famousScene .famous-dom-renderer').remove();
  physicsEngine = null;
});





colors = [ [151, 131, 242], [47, 189, 232] ];
totalCols = 12;
totalRows = 10;















// APP CODE
