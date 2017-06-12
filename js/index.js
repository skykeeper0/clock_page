function onReady() {
  console.log('Program start');
  createClock();
}

function createClock() {
  var c = new Object();
    c.updateClock = function() {
      let date = new Date();

      const clock = document.getElementById('clock');
      
      clock.innerHTML = formatDigits(date.getHours()) + ':' 
                      + formatDigits(date.getMinutes()) + ':' 
                      + formatDigits(date.getSeconds())
    }
  setInterval(c.updateClock, 1000);
  c.updateClock();
}

function updateClock() {
}

function formatDigits(val) {
  if (val < 10) {
    val = "0" + val;
  }

  return val;
}

window.onload = onReady