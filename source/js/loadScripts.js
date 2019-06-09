document.write('<script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" onerror="loadJQuery()"><\/script>');
document.write('<script src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js" onerror="loadSlick()"><\/script>');

let loadJQuery = function () {
  loadFile("jquery-3.4.1.min.js");
};

let loadSlick = function () {
  loadFile("slick.min.js");
};
