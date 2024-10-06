/** @format */
function updateTime() {
  // Caracas
  let caracasElement = document.querySelector("#caracas");
  let caracasDateElement = caracasElement.querySelector(".date");
  let caracasTimeElement = caracasElement.querySelector(".time");
  let caracasTime = moment().tz("America/Caracas");

  caracasDateElement.innerHTML = caracasTime.format("MMMM Do, YYYY");
  caracasTimeElement.innerHTML = caracasTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Dublin

  let dublinElement = document.querySelector("#dublin");
  let dublinDateElement = dublinElement.querySelector(".date");
  let dublinTimeElement = dublinElement.querySelector(".time");
  let dublinTime = moment().tz("Europe/Dublin");

  dublinDateElement.innerHTML = dublinTime.format("MMMM Do, YYYY");
  dublinTimeElement.innerHTML = dublinTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Dubai

  let dubaiElement = document.querySelector("#dubai");
  let dubaiDateElement = dubaiElement.querySelector(".date");
  let dubaiTimeElement = dubaiElement.querySelector(".time");
  let dubaiTime = moment().tz("Asia/Dubai");

  dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do, YYYY");
  dubaiTimeElement.innerHTML = dubaiTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
