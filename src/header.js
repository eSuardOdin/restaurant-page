export default function getHeader() {
    // Create header element
    const header = document.createElement('div');
    header.classList.add('header');
    // Header box (for title and page links/buttons)
    const headerBox = document.createElement('div');
    headerBox.classList.add('header-box');

    // Title of the page
    const title = document.createElement('p');
    title.classList.add('header-title');
    title.innerText = 'Best Coffee Shop in town';

    // Buttons of different pages
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const aboutBtn = document.createElement('button');

    homeBtn.classList.add('header-btn');
    homeBtn.classList.add('home-btn');
    menuBtn.classList.add('header-btn');
    menuBtn.classList.add('menu-btn');
    aboutBtn.classList.add('header-btn');
    aboutBtn.classList.add('about-btn');


    homeBtn.innerText = 'Home';
    menuBtn.innerText = 'Menu';
    aboutBtn.innerText = 'About';


    // Appending 
    headerBox.appendChild(title);
    headerBox.appendChild(homeBtn);
    headerBox.appendChild(aboutBtn);
    headerBox.appendChild(menuBtn);

    header.appendChild(headerBox);

    console.log('Header created');
    return header;
}