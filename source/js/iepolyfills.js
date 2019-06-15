let loadFile = function (file) {
  let fileRef = document.createElement("script");

  fileRef.setAttribute("type", "text/javascript");
  fileRef.setAttribute("src", file);
  document.getElementsByTagName("body")[0].appendChild(fileRef);
};

let loadPicturefill = function () {
  loadFile("js/picturefill.min.js");
};

let loadSvgxuse = function () {
  loadFile("js/svgxuse.min.js");
};

if(/Trident.*rv:/.test(navigator.userAgent)) {
  loadPicturefill();
  loadSvgxuse();
}

