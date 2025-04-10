let m = 0;
let y = null;

function start() {
  // Only start if not already running
  if (y !== null) return;

  y = setInterval(run, 100);

  function run() {
    if (m >= 1100) {
      clearInterval(y);
      y = null; // Reset y so you can restart again
      m = 0;
    } else {
      m += 10;
      const x = document.getElementById("img");
      x.style.marginLeft = m + 'px';
    }
  }
}

function stop() {
  if (y !== null) {
    clearInterval(y);
    y = null; // Important to reset so you can start again properly
  }
}
