const btn = document.querySelector('.header__list--link-button')
const additonalyBtn = document.querySelector('.header__list-additionaly')

const toggleAdditonalyBtn = () => {
    additonalyBtn.classList.toggle('open');
};


if (window.innerWidth < 767) {
    btn.addEventListener('click', toggleAdditonalyBtn);
}
