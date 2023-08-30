let cross = document.querySelector("#cross").addEventListener("click", () => {
  document.querySelector("#popup").style.left = "-200vw";
});
document.addEventListener("DOMContentLoaded", function () {
  const elementWidth = window.innerWidth;
  function checkWidthAndAttachEvent() {
    if (elementWidth <= 840) {
      document.querySelector("#openFilter").addEventListener("click", () => {
        if (document.querySelector("#popup").style.left == "-200vw") {
          document.querySelector("#popup").style.left = "0";
        } else {
          document.querySelector("#popup").style.left = "-200vw";
        }
      });
      window.removeEventListener("resize", checkWidthAndAttachEvent);
    }
  }

  window.addEventListener("resize", checkWidthAndAttachEvent);
  checkWidthAndAttachEvent();
});

let filterCheck = document.querySelector("#filterCheck");
let filterCheck1 = document.querySelector("#filterCheck1");

let arrowWrap1 = document.querySelector("#arrowWrap1");
let arrowWrap = document.querySelector("#arrowWrap");

let downArrow = document.querySelector("#downArrow");
let downArrow1 = document.querySelector("#downArrow1");

arrowWrap.addEventListener("click", handleClicked);
arrowWrap1.addEventListener("click", handleClicked1);

function handleClicked() {
  if (downArrow.style.transform == `rotate(180deg)`) {
    downArrow.style.transform = `rotate(0deg)`;
    filterCheck.style.display = "none";
  } else {
    downArrow.style.transform = `rotate(180deg)`;
    filterCheck.style.display = "block";
  }
}

function handleClicked1() {
  if (downArrow1.style.transform == `rotate(180deg)`) {
    downArrow1.style.transform = `rotate(0deg)`;
    filterCheck1.style.display = "none";
  } else {
    downArrow1.style.transform = `rotate(180deg)`;
    filterCheck1.style.display = "block";
  }
}
