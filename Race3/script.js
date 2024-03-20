function movePoint(x, y) {
  let field = document.getElementById("field");
  let point = document.createElement("div");
  point.className = "point";
  point.style.left = x + "px";
  point.style.top = y + "px";
  field.appendChild(point);
}

let sockets = [
  new WebSocket("ws://192.168.242.8:5000/plane"),
  new WebSocket("ws://192.168.242.11:8080/plane"),
  new WebSocket("ws://192.168.242.41:2080/plane")
];

sockets.forEach((socket, index) => {
  socket.onmessage = function (event) {
    let data = JSON.parse(event.data);
    let x = data.x;
    let y = data.y;
    movePoint(x, y);
  };
});

let apiUrls = [
  "http://192.168.242.8:5000/getAirplane",
  "http://192.168.242.11:8080/getAirplane",
  "http://192.168.242.41:2080/getAirplane"
];

function getCoordinatesFromApi(url) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.onload = function () {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      let xs = data.xs;
      let ys = data.ys;

      for (let i = 0; i < xs.length; i++) {
        movePoint(xs[i], ys[i]);
      }
    }
  };

  xhr.send();
}

function getCoordinatesFromAllApis() {
  apiUrls.forEach((url) => {
    getCoordinatesFromApi(url);
  });
}

setInterval(getCoordinatesFromAllApis);
