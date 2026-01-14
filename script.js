// ---------- PAGE CONTROL ----------
function hideAll() {
  for (let i = 1; i <= 5; i++) {
    document.getElementById("page" + i).classList.add("hidden");
  }
}

function goPage1() {
  hideAll();
  document.getElementById("page1").classList.remove("hidden");
}

function goPage2() {
  hideAll();
  document.getElementById("page2").classList.remove("hidden");
}

function goPage3() {
  hideAll();
  document.getElementById("page3").classList.remove("hidden");
}

function goPage4() {
  hideAll();
  document.getElementById("page4").classList.remove("hidden");
  displayFrequent();
}

function goEnd() {
  hideAll();
  document.getElementById("page5").classList.remove("hidden");
}

// ---------- FREQUENT USED STORAGE ----------
function saveFrequent(from, to) {
  let data = localStorage.getItem("frequentUnits");
  let frequentUnits = data ? JSON.parse(data) : {};

  let key = from + " → " + to;

  if (frequentUnits[key]) {
    frequentUnits[key]++;
  } else {
    frequentUnits[key] = 1;
  }

  localStorage.setItem("frequentUnits", JSON.stringify(frequentUnits));
}

function displayFrequent() {
  let list = document.getElementById("frequentList");
  list.innerHTML = "";

  let data = localStorage.getItem("frequentUnits");
  if (!data) {
    list.innerHTML = "<li>No frequent used units yet</li>";
    return;
  }

  let entries = Object.entries(JSON.parse(data));
  entries.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < entries.length && i < 5; i++) {
    let li = document.createElement("li");
    li.textContent = entries[i][0] + " (used " + entries[i][1] + " times)";
    list.appendChild(li);
  }
}

function resetFrequent() {
  localStorage.removeItem("frequentUnits");
  document.getElementById("frequentList").innerHTML =
    "<li>No frequent used units yet</li>";
}

// ---------- CONVERSION LOGIC ----------
function convert() {
  let value = Number(document.getElementById("value").value);
  let from = document.getElementById("fromUnit").value;
  let to = document.getElementById("toUnit").value;
  let result;

  if (isNaN(value)) {
    document.getElementById("result").innerText = "Please enter a number";
    return;
  }

  if (from === to) result = value;

  // LENGTH
  else if (from === "cm" && to === "m") result = value / 100;
  else if (from === "m" && to === "cm") result = value * 100;
  else if (from === "km" && to === "m") result = value * 1000;
  else if (from === "m" && to === "km") result = value / 1000;
  else if (from === "cm" && to === "mm") result = value * 10;
  else if (from === "mm" && to === "cm") result = value / 10;

  // MASS
  else if (from === "kg" && to === "g") result = value * 1000;
  else if (from === "g" && to === "kg") result = value / 1000;

  // FORCE (g = 9.81)
  else if (from === "kg" && to === "n") result = value * 9.81;
  else if (from === "n" && to === "kg") result = value / 9.81;

  // ENERGY (assume distance = 1 m)
  else if (from === "n" && to === "j") result = value;
  else if (from === "j" && to === "n") result = value;

  // TEMPERATURE
  else if (from === "c" && to === "k") result = value + 273.15;
  else if (from === "k" && to === "c") result = value - 273.15;

  else {
    document.getElementById("result").innerText = "Conversion not supported";
    return;
  }

  document.getElementById("result").innerText = result.toFixed(3);
  saveFrequent(from, to);
}
