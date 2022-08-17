console.clear();

var body = document.body;
var modal = createModal(document.querySelector("#modal-1"));
var openButton = document.querySelector("#open-button");
// var img=document.getElementById('#image');




openButton.addEventListener("click", function () {
  modal.open();
});

function createModal(container) {

  var contentt = container.querySelector(".modal-contentt");
  var dialog = container.querySelector(".modal-dialog");
  var polygon = container.querySelector(".modal-polygon");
  var svg = container.querySelector(".modal-svg");
  var point1 = createPoint(45, 45);
  var point2 = createPoint(55, 45);
  var point3 = createPoint(55, 55);
  var point4 = createPoint(45, 55);
  var stopButton = document.querySelector("#stop-button");
 //Event listner for Stop button...
  stopButton.addEventListener("click", function () {
    modal.close();
  });
  let image = document.getElementById('image');

   function change()
  {

    image.style.display = "none";

  }
  setInterval(change, 12000);//function calling with time-limit...



  var animation = new TimelineMax({
    onReverseComplete: onReverseComplete,
    onStart: onStart,
    paused: true
  })
    .to(point1, 0.3, {
      x: 15,
      y: 30,
      ease: Power4.easeIn
    }, 0)
    .to(point4, 0.3, {
      x: 5,
      y: 80,
      ease: Power2.easeIn
    }, "-=0.1")
    .to(point1, 0.3, {
      x: 0,
      y: 0,
      ease: Power3.easeIn
    })
    .to(point2, 0.3, {
      x: 100,
      y: 0,
      ease: Power2.easeIn
    }, "-=0.2")
    .to(point3, 0.3, {
      x: 100,
      y: 100,
      ease: Power2.easeIn
    })
    .to(point4, 0.3, {
      x: 0,
      y: 100,
      ease: Power2.easeIn
    }, "-=0.1")
    .to(container, 1, {
      autoAlpha: 1
    }, 0)
    .to(contentt, 1, {
      autoAlpha: 1
    })

  var modal = {
    animation: animation,
    container: container,
    contentt: contentt,
    dialog: dialog,
    isOpen: false,
    open: open,
    close: close
  };

 // body.removeChild(container);


  function onStart() {
    body.appendChild(container);
    //container.addEventListener("click", onClick);
  }

  function onReverseComplete() {
   // container.removeEventListener("click", onClick);
   // body.removeChild(container);
  }

  function open() {
    modal.isOpen = true;

    animation.play().timeScale(1.5);


  }

  function close()
   {
    modal.isOpen = false;
    animation.reverse().timeScale(1.5);
  }

  function createPoint(x, y) {
    var point = polygon.points.appendItem(svg.createSVGPoint());
    point.x = x || 0;
    point.y = y || 0;
    return point;
  }

  return modal;
}


