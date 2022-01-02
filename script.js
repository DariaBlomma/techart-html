'use strict';
const changeHeaderTheme = () => {
    const header = document.querySelector('.header'),
    logo = document.querySelector('.logo'),
    langVersions = document.querySelector('.lang-versions'),
    langDropdown = document.querySelector('.lang-versions-dropdown'),
    slogan = document.querySelector('.slogan'),
    hamburgerLines = document.querySelectorAll('.hamburger-line');

    // смена оформления хедера при прокрутке
    window.addEventListener('scroll', () => {
        if (pageYOffset === 0) {
            header.classList.add('on-top');
            logo.classList.remove('dark-logo');
            langVersions.classList.remove('main-dark-text');
            langVersions.classList.remove('black-arrow');
            langDropdown.classList.remove('light-background');
            slogan.classList.remove('secondary-dark-text');
            hamburgerLines.forEach(item => {
                item.classList.remove('dark-background');
            });
        } else {
            header.classList.remove('on-top');
            logo.classList.add('dark-logo');
            langVersions.classList.add('main-dark-text');
            langVersions.classList.add('black-arrow');
            langDropdown.classList.add('light-background');
            slogan.classList.add('secondary-dark-text');
            hamburgerLines.forEach(item => {
                item.classList.add('dark-background');
            });
        }
        
    });
};
changeHeaderTheme();

const openDropdown = (elem, dropdown, arrow = false, underlinedElem = '', isMenu = false) => {
    elem = document.querySelector(elem);
    dropdown = document.querySelector(dropdown);
    if (underlinedElem !== '') {
        underlinedElem = document.querySelector(underlinedElem);
    }

    elem.addEventListener('click', (event) => {
        dropdown.classList.toggle('d-none');
        if (arrow) {
            elem.classList.toggle('arrow-opened');
        }

        if (underlinedElem) {
            underlinedElem.classList.toggle('underlined');
        }

        if (isMenu) {
            const cross = document.querySelector('.menu-cross');
            document.querySelector('body').classList.add('scroll-forbidden');
            elem.classList.add('d-none');
            cross.classList.remove('d-none');
            window.scrollTo(0, 0);
            cross.addEventListener('click', () => {
                cross.classList.add('d-none');
                elem.classList.remove('d-none');
                dropdown.classList.add('d-none');
                document.querySelector('body').classList.remove('scroll-forbidden');
            });
        }

    });
};

openDropdown('.lang-versions', '.lang-versions-dropdown', true);
openDropdown('.hamburger-menu-dropdown .lang-versions', '.hamburger-menu-dropdown .lang-versions-dropdown', true);
openDropdown('.department-links-caption-wrapper', '.department-dropdown', true, '.department-links-caption');
openDropdown('.hamburger-menu', '.hamburger-menu-dropdown-wrapper', false, '', true);

