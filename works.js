let workIndex = 1;

showWork(workIndex);

function nextWork(n) {
  showWork((workIndex += n));
}

function currentWork(n) {
  showWork((workIndex = n));
}

function showWork(n) {
  let works = document.getElementsByClassName("works");
  let index = document.getElementsByClassName("index");

  if (n > works.length) {
    workIndex = 1;
  }

  if (n < 1) {
    workIndex = works.length;
  }

  // hide works by default
  for (let i = 0; i < works.length; i++) {
    works[i].style.display = "none";
  }

  for (let i = 0; i < index.length; i++) {
    index[i].className = index[i].className.replace(" active", "");
  }

  works[workIndex - 1].style.display = "block";
  index[workIndex - 1].className += " active";
}
