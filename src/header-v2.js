export default function getHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    const headerBox = document.createElement('div');
    headerBox.classList.add('header-box');

    const title = document.createElement('p');
    title.classList.add('header-title');
    title.innerText = 'RESTAURANT';

    header.appendChild(headerBox.appendChild(title));

    console.log('Header created');
    return header;
}