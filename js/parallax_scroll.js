$(document).ready(function() {

var rellax = new Rellax('.rellax');


});

(function () {
    var elements = document.getElementsByClassName('hide-on-click');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function () {
            this.style.display = 'none';
        });
    }
})();