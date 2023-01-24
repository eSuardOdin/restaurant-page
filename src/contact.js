export default function getContactpage() {
    const element = document.createElement('div');
    element.classList.add('page-element');
    element.innerHTML = 'Contact';
    return element;
}