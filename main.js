let $openMenu = document.querySelector(".button-menu");
let $headerModal = document.querySelector('.header__modal');
let $close = document.querySelector('.close');


$openMenu.addEventListener('click', function () {
    $headerModal.classList.add('show');
});

$close.addEventListener('click', function () {
    $headerModal.classList.remove('show');
});