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
}

function goEnd() {
  hideAll();
  document.getElementById("page5").classList.remove("hidden");
}

function convert() {
  let value = document.getElementById("value").value;
  let type = document.getElementById("conversion").value;
  let result = 0;

  if (type === "cm-km") {
    result = value / 100000;
  } else if (type === "km-m") {
    result = value * 1000;
  } else if (type === "c-k") {
    result = Number(value) + 273.15;
  } else if (type === "cm-mm") {
    result = value * 10;
  } else if (type === "m-cm") {
    result = value * 100;
  }

  document.getElementById("result").innerText = result;
}
