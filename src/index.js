import _ from "lodash";
import './style.css';
import printPage from './print';
import getHomepage from './homepage';
import getAboutpage from "./about";

function component() {
    const btnHomePage = document.createElement('button');
    btnHomePage.innerHTML = 'HOMEPAGE';
    btnHomePage.onclick =  () => printPage(container, getHomepage());

    const btnAbout = document.createElement('button');
    btnAbout.innerHTML = 'ABOUT';
    btnAbout.onclick =  () => printPage(container, getAboutpage());

    const mainPage = document.createElement('div');
    const tabs = document.createElement('div'); 
    const container = document.createElement('div');
    mainPage.innerHTML = 'RESTAURANT';

    
    tabs.appendChild(btnHomePage);
    tabs.appendChild(btnAbout);
    mainPage.appendChild(tabs);


    mainPage.appendChild(container)
    
    mainPage.classList.add('test');
    return mainPage;
}

document.body.appendChild(component());