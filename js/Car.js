AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "../assets/car/scene.gltf" },
    moveX: {type:"number", default:1},
  },
  init: function() {
    // Do something when component first attached.
    this.el.setAttribute("gltf-model", this.data.modelRef);
    var position = { x: 0, y: 50, z: 80 };
    const rotation = { x: 0, y: -100, z: 0 };
    this.data.moveX = this.data.moveX + 0.01;
    position.x = this.data.moveX;
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  }
});
