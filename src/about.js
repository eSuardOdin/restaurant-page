export default function getAboutpage() {
    const pageTitle = document.createElement('div');
    pageTitle.classList.add('page-title');
    pageTitle.innerHTML = 'About Us';
    const element = document.createElement('div');
    element.appendChild(pageTitle);
    element.classList.add('page-element');
    return element;
}