const fontSizeControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

spanText.style.fontSize = fontSizeControl.value + 'px';

fontSizeControl.addEventListener('input', function () {
  spanText.style.fontSize = fontSizeControl.value + 'px';
});
