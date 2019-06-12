document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" onerror="loadJQuery()"><\/script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js" onerror="loadSlick()"><\/script>');

let loadJQuery = function () {
  loadFile("jquery-3.4.1.min.js");
};

let loadSlick = function () {
  loadFile("slick.min.js");
};

let loadCss = function (file) {
  let fileRef = document.createElement("link");

  fileRef.setAttribute("rel", "stylesheet");
  fileRef.setAttribute("href", file);
  document.getElementsByTagName("head")[0].appendChild(fileRef);
};

let loadSlickCss = function() {
  loadCss("css/slick.min.css");
};

let loadRevealatorCss =function() {
  loadCss("css/fm.revealator.jquery.min.css");
};

loadSlickCss();
loadRevealatorCss();
