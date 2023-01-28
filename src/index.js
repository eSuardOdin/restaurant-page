import './style.css';
import getFullPage from './fullPage';
import getHeader from './header';
import getBody from './body';
import getFooter from './footer';
import getHomepage from './homePage';
import printPage from './print';
import getMenuPage from './menu';
import getAboutpage from './about';
const fullPage = getFullPage();
const header = getHeader();
const body = getBody();
const footer = getFooter();

body.appendChild(getHomepage());

fullPage.appendChild(header);
fullPage.appendChild(body);
fullPage.appendChild(footer);
fullPage.classList.add('home-background');

const buttons = header.querySelectorAll('.header-btn');
buttons.forEach(el => {
    el.addEventListener('click', () => {
        const fullPage = el.parentElement.parentElement.parentElement;
        // Check wich btn
        switch(el.classList.value) {
            case 'header-btn home-btn' :
                printPage(body, getHomepage(), 'page-container');
                fullPage.classList.add('home-background');
                break;
            case 'header-btn about-btn' :
                printPage(body, getAboutpage(), 'page-container');
                fullPage.classList.add('home-background');
                break;
            case 'header-btn menu-btn' :
                printPage(body, getMenuPage(), 'page-container');
                fullPage.classList.remove('home-background');
                break;
        }
    });
})

document.body.appendChild(fullPage);

