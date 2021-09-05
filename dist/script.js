var c = $("#minicube");
var cubeSize = 150;
var cSize = cubeSize / 3;

var x = cSize * 2;
var y = 0;
var z = 0;
var delay = 60;

function metal() {
  if ($(".square").length == $(".square.visible").length) {
    $("#cube").addClass("full");
    setTimeout(function () {
      $("#cube").addClass("metal");
    }, delay * 8);
  }
}

function rX(d) {
  c.toggleClass("transition").css(
    "transform",
    "translate3d(" + x + "px, " + y + "px, " + z + "px) rotateX(" + d + "deg)"
  );
}
function rY(d) {
  c.toggleClass("transition").css(
    "transform",
    "translate3d(" + x + "px, " + y + "px, " + z + "px) rotateY(" + d + "deg)"
  );
}
function rZ(d) {
  c.toggleClass("transition").css(
    "transform",
    "translate3d(" + x + "px, " + y + "px, " + z + "px) rotateZ(" + d + "deg)"
  );
}

function animate() {
  var i = 0;

  $(".cubeface .square").each(function (key, value) {
    var sq = $(this);
    setTimeout(function () {
      sq.addClass("visible");
      metal();
    }, delay * 2 * (key + 1));
  });

  // moving left
  setTimeout(function () {
    rY(-90);
  }, delay * i++);
  setTimeout(function () {
    x -= cSize;
    rY(0);
  }, delay * i++);
  setTimeout(function () {
    rY(-90);
  }, delay * i++);
  // switch
  setTimeout(function () {
    x -= cSize;
    rY(0);
    c.css("transform-origin", cSize + "px " + cSize + "px 0");
  }, delay * i++);
  // moving forward
  setTimeout(function () {
    rX(-90);
  }, delay * i++);
  setTimeout(function () {
    y += cSize;
    rX(0);
  }, delay * i++);
  setTimeout(function () {
    rX(-90);
  }, delay * i++);
  setTimeout(function () {
    y += cSize;
    rX(0);
  }, delay * i++);
  setTimeout(function () {
    rX(-180);
  }, delay * i++);
  //switch
  setTimeout(function () {
    y += cSize;
    z -= cSize;
    rX(0);
    c.css("transform-origin", cSize + "px 0 0");
  }, delay * i++);
  // moving down
  setTimeout(function () {
    rX(-90);
  }, delay * i++);
  setTimeout(function () {
    z -= cSize;
    rX(0);
  }, delay * i++);
  setTimeout(function () {
    rX(-90);
  }, delay * i++);
  //switch
  setTimeout(function () {
    z -= cSize;
    rX(0);
  }, delay * i++);
  // moving right
  setTimeout(function () {
    rZ(-90);
  }, delay * i++);
  setTimeout(function () {
    x += cSize;
    rZ(0);
  }, delay * i++);
  setTimeout(function () {
    rZ(-90);
  }, delay * i++);
  setTimeout(function () {
    x += cSize;
    rZ(0);
  }, delay * i++);
  setTimeout(function () {
    rZ(-180);
  }, delay * i++);
  //switch
  setTimeout(function () {
    x += cSize;
    y -= cSize;
    rZ(0);
    c.css("transform-origin", "0 0 0");
  }, delay * i++);
  // moving back
  setTimeout(function () {
    rZ(-90);
  }, delay * i++);
  setTimeout(function () {
    y -= cSize;
    rZ(0);
  }, delay * i++);
  setTimeout(function () {
    rZ(-90);
  }, delay * i++);
  // switch
  setTimeout(function () {
    y -= cSize;
    rZ(0);
    c.css("transform-origin", "0 0 " + cSize + "px");
  }, delay * i++);
  // moving up
  setTimeout(function () {
    rY(-90);
  }, delay * i++);
  setTimeout(function () {
    z += cSize;
    rY(0);
  }, delay * i++);
  setTimeout(function () {
    rY(-90);
  }, delay * i++);
  // switch
  setTimeout(function () {
    z += cSize;
    rY(0);
    c.css("transform-origin", "0 " + cSize + "px 0");
  }, delay * i++);
  // moving left
  setTimeout(function () {
    rZ(90);
  }, delay * i++);
  setTimeout(function () {
    y += cSize;
    rZ(0);
  }, delay * i++);
  setTimeout(function () {
    $("#minicube").addClass("grow");
  }, delay * i++);
}

setTimeout(animate, delay * 10);