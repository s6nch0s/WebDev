function clock(){
  var hours = document.getElementById('hour')
  var minutes = document.getElementById('minutes')
  var seconds = document.getElementById('seconds')
  var date = document.getElementById('date')

  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();
  var d = new Date().toLocaleDateString();

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  date.innerHTML = d;
}
var interval = setInterval(clock, 1000);
