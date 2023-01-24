import _ from "lodash";
import './style.css';
import printPage from './print';
import getHomepage from "./homepage";
import getAboutpage from "./about";
import getContactpage from "./contact";
import bgImg from './images/cofee-jason-villanueva.jpg'

function component() {
// -------------- Creation of tabs/buttons --------------------
    const btnHomePage = document.createElement('button');
    btnHomePage.innerHTML = 'HOMEPAGE';
    btnHomePage.onclick =  () => {
        printPage(container, getHomepage());
        mainPage.classList.add('img-background');
    } 

    const btnAbout = document.createElement('button');
    btnAbout.innerHTML = 'ABOUT';
    btnAbout.onclick =  () => {
        printPage(container, getAboutpage());
        mainPage.classList.remove('img-background');
    }
    const btnContact = document.createElement('button');
    btnContact.innerHTML = 'CONTACT';
    btnContact.onclick =  () => {
        printPage(container, getContactpage());
        mainPage.classList.remove('img-background');
    }
// -------------------------------------------------------------


    const header = document.createElement('div');
    header.innerHTML = '<p>RESTAURANT</p>';
    header.classList.add('header');

    const tabs = document.createElement('div'); 
    tabs.classList.add('tabs');
    tabs.appendChild(btnHomePage);
    tabs.appendChild(btnAbout);
    tabs.appendChild(btnContact);

    header.appendChild(tabs);
    


    const container = document.createElement('div');
    container.classList.add('page-container');
    printPage(container, getHomepage());

    
    
    const mainPage = document.createElement('div');
    mainPage.appendChild(header);
    mainPage.appendChild(container);
    mainPage.classList.add('main-page');
    mainPage.classList.add('img-background');
    return mainPage;
}

document.body.appendChild(component());