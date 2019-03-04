function $(sel) {
    return document.querySelector(sel);
}
var dialog = $('.deemphasizing');
var main = $('.deemphasizing-main');

$('.deemphasizing-button').onclick = function() {
    dialog.setAttribute('open', '');
    main.classList.add('de-emphasized');
}

dialog.onclick = function() {
    if (dialog.close) dialog.close();
    else dialog.removeAttribute('open');
    main.classList.remove('de-emphasized');
}
function changeRange(event) {
    console.log(event.target.value,this.value)
    $('.image-slider__before').style.width = event.target.value + '%';
}