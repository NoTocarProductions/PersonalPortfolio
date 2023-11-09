// scroll - appear animation
// --------------------------------------------
let checkBox = document.querySelectorAll(".checker");

let objectOptions = {
  root: null,
  threshold: 0,
  rootMargin: "0px",
};

let triggered = false;

checkBox.forEach((element) => {
  let sectionObserver = new IntersectionObserver(
    titleDisappearFunction,
    objectOptions
  );
  sectionObserver.observe(element);
});

function titleDisappearFunction(entries) {
  entries.forEach((entry) => {
    let title = entry.target;
    if (entry.isIntersecting) {
      title.classList.add("disappear");
    } else {
      title.classList.remove("disappear");
    }
  });
}

window.addEventListener("scroll", function (e) {
  if (window.scrollY > 50) {
    document.getElementById("titleSeries").setAttribute("class", "removeTitle");
    document.getElementById("titleSeries").classList.remove("appear");
  } else {
    document.getElementById("titleSeries").classList.remove("removeTitle");
  }
});


function copyToClipboard(elementId) {
  // Get the text content from the element
  var text = document.getElementById(elementId).textContent;

  // Create a temporary textarea element to hold the text to copy
  var textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed"; // Make it invisible
  document.body.appendChild(textarea);

  // Select and copy the text
  textarea.select();
  document.execCommand("copy");

  // Clean up and remove the temporary textarea
  document.body.removeChild(textarea);

  // Optionally, provide some visual feedback to the user
}

