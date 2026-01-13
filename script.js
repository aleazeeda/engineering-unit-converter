function hideAll() {
  document.getElementById("frontPage").classList.add("hidden");
  document.getElementById("menuPage").classList.add("hidden");
  document.getElementById("frequentPage").classList.add("hidden");
  document.getElementById("converterPage").classList.add("hidden");
  document.getElementById("endPage").classList.add("hidden");
}

function goToMenu() {
  hideAll();
  document.getElementById("menuPage").classList.remove("hidden");
}

function goToConverter() {
  hideAll();
  document.getElementById("converterPage").classList.remove("hidden");
}

function showFrequent() {
  hideAll();
  document.getElementById("frequentPage").classList.remove("hidden");
}

function goBack() {
  hideAll();
  document.getElementById("frontPage").classList.remove("hidden");
}

function goToEnd() {
  hideAll();
  document.getElementById("endPage").classList.remove("hidden");
}

function restart() {
  hideAll();
  document.getElementById("frontPage").classList.remove("hidden");
}

function convert() {
  let value = document.getElementById("value").value;
  let unit = document.getElementById("unit").value;
  let result = 0;

  if (unit === "cm-m") {
    result = value / 100;
  } else if (unit === "km-m") {
    result = value * 1000;
  } else if (unit === "cm-km") {
    result = value / 100000;
  }

  document.getElementById("result").innerText = result;
}
